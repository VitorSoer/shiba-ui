import Radio from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: Radio', () => {
  testRenderingOfComponent({
    testId: 'radio',
    component: Radio,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'radio',
    component: Radio,
    propertiesToTest: { $radioSize: 50, $radioColor: 'red' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-color': 'red',
    },
  });
});
