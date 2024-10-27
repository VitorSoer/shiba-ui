import Checkbox from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

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

  testComponentVisibility({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'checkbox',
    component: Checkbox,
    expectedResultingStyles: {
      'border-color': color.highlight,
    },
  });
});
