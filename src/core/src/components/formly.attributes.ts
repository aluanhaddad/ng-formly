import {FormlyFieldConfig} from './formly.field.config';
import {bindable, customAttribute, dynamicOptions} from 'aurelia-templating';
import {inject, autoinject} from 'aurelia-dependency-injection';
import {ElementEvents} from 'aurelia-framework';
// import {} from 'aurelia-templating-resources';
const attributes = ['id', 'name', 'placeholder', 'tabindex', 'step', 'aria-describedby'];
const statements = ['change', 'keydown', 'keyup', 'keypress', 'click', 'focus', 'blur'];
@dynamicOptions
@autoinject export class FormlyAttributesCustomAttribute {

  constructor(readonly element: Element, readonly events: ElementEvents) {
    events.subscribe('blur', () => {
      this.focus = false;
    });
    events.subscribe('focus', () => {
      this.focus = true;
    });
  }
  @bindable('formly-attributes') field: FormlyFieldConfig;
  @bindable formControl;

  options = {};

  propertyChanged(name, newValue, oldValue) {
    if (!newValue.field) {
      return;
    }

    const {field: newFieldValue} = newValue.field;
    const {field: oldFieldValue} = oldValue.field;

    attributes.filter(attr => this.canApplyRender(newFieldValue, attr))
      .forEach(attr => {
        this.element.setAttribute(attr, getPropValue(this.field, attr));
      });

    statements.filter(statement => this.canApplyRender(newFieldValue, statement))
      .forEach(statement => {
        this.events.subscribe(statement, this.getStatementValue(statement));
      });

    if ((oldFieldValue && oldFieldValue.focus) !== (newFieldValue && newFieldValue.focus)) {
      this.events.publish(this.focus ? 'focus' : 'blur', {...newFieldValue});
    }
  }

  get focus() {
    return this.field.focus;
  }
  set focus(focus) {
    this.field.focus = focus;
  }

  private getStatementValue = statement => () => this.field.templateOptions[statement](this.field, this.formControl);

  private canApplyRender(fieldChange: {previousValue: FormlyFieldConfig}, prop: string): boolean {
    const currentValue = getPropValue(this.field, prop);
    const previousValue = getPropValue(fieldChange.previousValue, prop);

    return previousValue !== currentValue && statements.includes(prop) ? typeof currentValue === 'function' : true;
  }
}
function getPropValue(field: FormlyFieldConfig, prop: string) {
  const fieldValue = field || {};
  if (fieldValue.id && prop === 'aria-describedby') {
    return fieldValue.id + '-message';
  }
  if (fieldValue.templateOptions && fieldValue.templateOptions[prop]) {
    return fieldValue.templateOptions[prop];
  }
  return fieldValue[prop];
}
