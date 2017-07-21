import {FieldType} from '../templates/field.type';
import {inlineView, customElement} from 'aurelia-templating';

@customElement('formly-group')
@inlineView(`
  <template>
    <formly-form [fields]="field.fieldGroup"
        [model]="model"
        [form]="formlyGroup"
        [options]="newOptions"
        [ngClass]="field.fieldGroupClassName"
        [buildForm]="false">
    </formly-form>
  </template>`
)
export class FormlyGroup extends FieldType {

  get newOptions() {
    return {...this.options};
  }

  get formlyGroup() {
    if (this.field.formControl) {
      return this.field.formControl;
    } else {
      return this.form;
    }
  }
}
