import {FormlyValueChangeEvent} from './../services/formly.event.emitter';
import {FormlyFieldConfig, FormGroup} from './formly.field.config';
import {FormlyFormBuilder} from '../services/formly.form.builder';
import {assignModelValue, isValue, isObject, reverseDeepMerge, getKey, getValueForKey, getFieldModel} from '../utils';
import {bindable} from 'aurelia-framework';

export class FormlyForm {
  @bindable model = {};
  @bindable form: FormGroup = {};
  @bindable fields: FormlyFieldConfig[] = [];
  @bindable options: {updateInitialValue?, resetModel?};

  @bindable buildForm = true;
  initialModel;

  constructor(readonly formlyBuilder: FormlyFormBuilder) {}

  ngOnChanges(changes) {
    if (changes.fields) {
      this.model = this.model || {};
      this.form = this.form || {};
      this.setOptions();
      if (this.buildForm !== false) {
        this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
      }
      this.updateInitialValue();
    } else if (changes.model && this.fields && this.fields.length > 0) {
      this.form.patchValue(this.model);
    }
  }

  fieldModel(field: FormlyFieldConfig) {
    const isGroup = field.fieldGroup || field.fieldArray;
    if (field.key && isGroup) {
      return getFieldModel(this.model, field, true);
    }
    return this.model;
  }

  changeModel(event: FormlyValueChangeEvent) {
    assignModelValue(this.model, event.key, event.value);
  }

  setOptions() {
    const {resetModel, updateInitialValue} = this;
    this.options = {
      ...{resetModel, updateInitialValue}, ...this.options || {}
    };
  }

  private resetModel = (model?) => {
    model = isValue(model) ? this.initialModel : model;
    this.form.patchValue(model);
    this.resetFormGroup(model, this.form);
    this.resetFormModel(model, this.model);
  }

  private resetFormModel(model: any, formModel: any, path?: Array<string | number>) {
    if (!isObject(model) && !Array.isArray(model)) {
      return;
    }

    // removes
    for (const key in formModel) {
      if (!(key in model) || isValue(model[key])) {
        if (!this.form.get((path || []).concat(key))) {
          // don't remove if bound to a control
          delete formModel[key];
        }
      }
    }

    Object.entries(model)
      .map(([key]) => ({key, modelValue: model[key], formModelValue: formModel[key]}))
      .forEach(({key, modelValue, formModelValue}) => {
        if (key in formModel && isValue(modelValue)) {
          this.resetFormModel(modelValue, formModelValue, [...path || [], ...key]);
        } else {
          formModel[key] = model[key];
        }
      });
  }

  private resetFormGroup(model: any, form: FormGroup, actualKey?: string) {
    for (const controlKey in form.controls) {
      const key = getKey(controlKey, actualKey);
      if (form.controls[controlKey] instanceof FormGroup) {
        this.resetFormGroup(model, <FormGroup>form.controls[controlKey], key);
      }
      if (form.controls[controlKey] instanceof FormArray) {
        this.resetFormArray(model, <FormArray>form.controls[controlKey], key);
      }
      if (form.controls[controlKey] instanceof FormControl) {
        form.controls[controlKey].setValue(getValueForKey(model, key));
      }
    }
  }

  private resetFormArray(model: any, formArray: FormArray, key: string) {
    const newValue = getValueForKey(model, key);

    // removes and updates
    for (let i = formArray.length - 1; i >= 0; i--) {
      if (formArray.at(i) instanceof FormGroup) {
        if (newValue && !isValue(newValue[i])) {
          this.resetFormGroup(newValue[i], <FormGroup>formArray.at(i));
        }
        else {
          formArray.removeAt(i);
          const value = getValueForKey(this.model, key);
          if (Array.isArray(value)) {
            value.splice(i, 1);
          }
        }
      }
    }

    // inserts
    if (Array.isArray(newValue) && formArray.length < newValue.length) {
      const remaining = newValue.length - formArray.length;
      const initialLength = formArray.length;
      for (let i = 0; i < remaining; i++) {
        const pos = initialLength + i;
        getValueForKey(this.model, key).push(newValue[pos]);
        formArray.push(new FormGroup({}));
      }
    }
  }

  private updateInitialValue = () => {
    const obj = reverseDeepMerge(this.form.value, this.model);
    this.initialModel = JSON.parse(JSON.stringify(obj));
  }
}
