import 'reflect-metadata';
import 'flat-map-polyfill';
import test from 'tape';
import {FormlyValidationMessages} from './formly.validation-messages';

test('FormlyValidationMessages service', ({equal, end}) => {
  const formlyMessages = createFormlyValidationMessages();

  test('get validator error message', ({equal, end}) => {
    equal(formlyMessages.getValidatorErrorMessage('required'), 'This field is required.');
    equal(formlyMessages.getValidatorErrorMessage('maxlength'), undefined);
    end();
  });

  test('add validator error message', ({equal, end}) => {
    formlyMessages.addStringMessage('maxlength', 'Maximum Length Exceeded.');
    equal(formlyMessages.getValidatorErrorMessage('maxlength'), 'Maximum Length Exceeded.');
    end();
  });
  end();
});

function createFormlyValidationMessages() {
  return new FormlyValidationMessages([{
    validationMessages: [
      {name: 'required', message: 'This field is required.'},
    ],
  }]);
}
