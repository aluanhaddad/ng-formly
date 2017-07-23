import {Field} from './field';
import {FormlyLifeCycleOptions, FormlyLifeCycleFn} from './../components/formly.field.config';
import {View} from 'aurelia-templating';

export abstract class FieldType extends Field {
  created(owningView: View, myView: View) {
    lifeCycleHooks(this, this.lifecycle.onInit);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   lifeCycleHooks(this, this.lifecycle.onChanges);
  // }

  ngDoCheck() {
    lifeCycleHooks(this, this.lifecycle.doCheck);
  }

  ngAfterContentInit() {
    lifeCycleHooks(this, this.lifecycle.afterContentInit);
  }

  ngAfterContentChecked() {
    lifeCycleHooks(this, this.lifecycle.afterContentChecked);
  }

  attached() {
    lifeCycleHooks(this, this.lifecycle.afterViewInit);
  }

  ngAfterViewChecked() {
    lifeCycleHooks(this, this.lifecycle.afterViewChecked);
  }

  detached() {
    lifeCycleHooks(this, this.lifecycle.onDestroy);
  }
  unbind() {
    lifeCycleHooks(this, this.lifecycle.onDestroy);
  }
  get lifecycle(): FormlyLifeCycleOptions {
    return this.field.lifecycle || {};
  }

}

function lifeCycleHooks(type: FieldType, callback: FormlyLifeCycleFn) {
  if (callback) {
    const {form, field, model, options} = type;
    callback.bind(type)(form, field, model, options);
  }
}
