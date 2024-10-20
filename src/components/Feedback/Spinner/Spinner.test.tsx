import Spinner from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: Spinner', () => {
  testRenderingOfComponent({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'spinner',
    component: Spinner,
    propertiesToTest: { $spinnerSize: 50, $spinnerColor: 'red' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-top-color': 'red',
      'border-right-color': 'red',
    },
  });
});
