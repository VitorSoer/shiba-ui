import Checkbox from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: Checkbox', () => {
  testRenderingOfComponent({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'checkbox',
    component: Checkbox,
    propertiesToTest: { $checkboxSize: 50, $checkboxColor: 'red' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-color': 'red',
    },
  });
});
