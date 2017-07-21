import {EventAggregator} from 'aurelia-event-aggregator';
export class FormlyValueChangeEvent {
  constructor(public key: string, public value: {}) {}
}

export class FormlyEventEmitter extends EventAggregator<FormlyValueChangeEvent> {
  emit(value: FormlyValueChangeEvent) {
    super.publish(value);
  }
}

export class FormlyPubSub {
  emitters: {[name: string]: FormlyEventEmitter} = {};

  setEmitter(key: string, emitter: FormlyEventEmitter) {
    this.emitters[key] = emitter;
  }

  getEmitter(key: string) {
    return this.emitters[key];
  }

  removeEmitter(key: string) {
    delete this.emitters[key];
  }
}
