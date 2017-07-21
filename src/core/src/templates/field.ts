import {FormlyTemplateOptions, FormlyFieldConfig, AbstractControl, FormGroup} from '../components/formly.field.config';
import {bindable} from 'aurelia-framework';
export abstract class Field {
  @bindable form: FormGroup;
  @bindable field: FormlyFieldConfig;
  @bindable model: any;
  @bindable options: any;

  get key() {return this.field.key; }
  get formControl(): AbstractControl {return this.field.formControl || this.form[this.key]; }

  /**
   * @deprecated Use `to` instead.
   **/
  get templateOptions(): FormlyTemplateOptions {
    console.warn(`${this.constructor.name}: 'templateOptions' is deprecated. Use 'to' instead.`);

    return this.to;
  }

  get to(): FormlyTemplateOptions {return this.field.templateOptions; }

  get valid(): boolean {return this.options.showError(this); }

  get id(): string {return this.field.id; }

  get formState() {return this.options.formState || {}; }
}
