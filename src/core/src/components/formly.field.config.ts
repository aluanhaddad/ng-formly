export type AbstractControl = {value};
export type FormGroup = {[key: string]: AbstractControl};

export interface FormlyFieldConfig {
  key?: string;
  id?: string;
  name?: string;
  templateOptions?: FormlyTemplateOptions;
  optionsTypes?: string[];
  validation?: {
    messages?: {
      [messageProperties: string]: string | Function;
    };
    show?: boolean;
    [additionalProperties: string]: any;
  };
  validators?: any;
  asyncValidators?: any;
  template?: string;
  component?: any;
  wrapper?: string[] | string;
  wrappers?: string[];
  fieldGroupClassName?: string;
  fieldGroup?: FormlyFieldConfig[];
  fieldArray?: FormlyFieldConfig;
  hide?: boolean;
  formControl?: AbstractControl;
  hideExpression?: boolean | string | ((model: any, formState: any) => boolean);
  className?: string;
  type?: string;
  expressionProperties?: any;
  focus?: boolean;
  modelOptions?: any;
  lifecycle?: FormlyLifeCycleOptions;
  defaultValue?: any;
  parsers?: [(value: any, index: number) => {}];
}

export interface FormlyTemplateOptions {
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: any[];
  rows?: number;
  cols?: number;
  description?: string;
  hidden?: boolean;
  max?: number;
  min?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
  tabindex?: number;
  step?: number;
  focus?: Function;
  blur?: Function;
  keyup?: Function;
  keydown?: Function;
  click?: Function;
  change?: Function;
  keypress?: Function;
  [additionalProperties: string]: any;
}

export interface FormlyLifeCycleFn {
  (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: any): void;
}

export interface FormlyLifeCycleOptions {
  onInit?: FormlyLifeCycleFn;
  onChanges?: FormlyLifeCycleFn;
  doCheck?: FormlyLifeCycleFn;
  afterContentInit?: FormlyLifeCycleFn;
  afterContentChecked?: FormlyLifeCycleFn;
  afterViewInit?: FormlyLifeCycleFn;
  afterViewChecked?: FormlyLifeCycleFn;
  onDestroy?: FormlyLifeCycleFn;
}
