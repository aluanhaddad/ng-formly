import test from 'tape';
import {FormlyConfig} from './formly.config';
import {ValidationRules, Validator, AureliaValidationConfiguration} from 'aurelia-validation';

test('FormlyConfig service', ({equal, end}) => {
  const config = createConfig();

  test('wrappers', ({equal, end}) => {
    test('should add wrapper', ({equal, end}) => {
      config.setWrapper({name: 'custom_wrapper', component: TestComponent});

      equal(config.getWrapper('layout').name, 'layout');
      equal(config.getWrapper('custom_wrapper').name, 'custom_wrapper');
      end();
    });

    test('should throw when wrapper not found', ({throws, end}) => {
      const config = new FormlyConfig();
      throws(() => config.getWrapper('custom_wrapper'), '[Formly Error] There is no wrapper by the name of "custom_wrapper"');
      end();
    });

    end();
  });

  test('types', ({end}) => {
    test('should add type', ({equal, end}) => {
      config.setType({name: 'custom_input'});

      equal(config.getType('input').name, 'input');
      equal(config.getType('custom_input').name, 'custom_input');
      end();
    });

    test('should add type as an array', ({equal, end}) => {
      config.setType([{name: 'custom_input1'}, {name: 'custom_input2'}]);

      equal(config.getType('custom_input1').name, 'custom_input1');
      equal(config.getType('custom_input2').name, 'custom_input2');
      end();
    });

    test('should throw when type not found', ({throws, end}) => {
      const config = new FormlyConfig();
      throws(() => config.getType('custom_input'), '[Formly Error] There is no type by the name of "custom_input"');
      end();
    });
    end();
  });

  test('validators', ({equal, end}) => {
    test('should add validator', ({equal, end}) => {
      config.setValidator({name: 'null', validation: Validators.nullValidator});

      equal(config.getValidator('null').name, 'null');
      equal(config.getValidator('required').name, 'required');
    });

    test('should throw when validator not found', ({throws, end}) => {
      const config = new FormlyConfig();
      throws(() => config.getValidator('custom_validator'), '[Formly Error] There is no validator by the name of "custom_validator"');
      end();
    });
    end();
  });
  end();
});

@Component({selector: 'formly-test-cmp', template: '', entryComponents: []})
class TestComponent {
}

function createConfig() {
  return new FormlyConfig([{
    wrappers: [{name: 'layout', component: TestComponent}],
    types: [{name: 'input'}],
    validators: [{name: 'required', validation: Validators.required}],
  }]);
}
