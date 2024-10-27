import Switch from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Switch', () => {
  testRenderingOfComponent({
    testId: 'switch',
    component: Switch,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'switch',
    component: Switch,
    propertiesToTest: { $switchSize: 50, $switchDisabledColor: 'red' },
    expectedResultingStyles: {
      width: '100px',
      height: '50px',
      background: 'red',
    },
  });

  testComponentVisibility({
    testId: 'switch',
    component: Switch,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'switch',
    component: Switch,
    expectedResultingStyles: {
      background: color.highlight,
    },
  });
});
