import {inject} from 'aurelia-dependency-injection';
import {FORMLY_CONFIG_TOKEN, ConfigOption} from './formly.config';

export class FormlyValidationMessages {
  constructor( @inject(FORMLY_CONFIG_TOKEN) configs: ConfigOption[] = []) {
    configs.flatMap(config => config.validationMessages || []).forEach(validation => {
      this.addStringMessage(validation.name, validation.message);
    });
  }

  messages: {[name: string]: string} = {};

  addStringMessage(name: string, message: string) {
    this.messages[name] = message;
  }

  getMessages() {
    return this.messages;
  }

  getValidatorErrorMessage(name: string) {
    return this.messages[name];
  }
}
