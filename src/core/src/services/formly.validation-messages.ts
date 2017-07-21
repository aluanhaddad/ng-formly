import {inject} from 'aurelia-dependency-injection';
import {FORMLY_CONFIG_TOKEN, ConfigOption} from './formly.config';

@inject(FORMLY_CONFIG_TOKEN) export class FormlyValidationMessages {
  constructor(configs: ConfigOption[] = []) {
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
