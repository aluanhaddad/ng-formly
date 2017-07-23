import {FieldType} from '../templates/field.type';

export class FormlyGroup extends FieldType {

  get newOptions() {
    return {...this.options};
  }

  get formlyGroup() {
    return this.field.formControl || this.form;
  }
}
