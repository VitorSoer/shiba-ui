import Icon from '.';
import {
  testRenderingOfComponent,
  testComponentVariant,
} from '../../../tests/functions';
import { color } from '../../../theme/constants/color';

describe('UI Component: Spinner', () => {
  testRenderingOfComponent({
    testId: 'icon',
    component: Icon,
    componentProperties: {},
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'circle',
    expectedResultingStyles: {
      background: color.primary,
      borderRadius: '50%',
    },
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'square',
    expectedResultingStyles: {
      background: color.primary,
      borderRadius: '4px',
    },
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'circleOutlined',
    expectedResultingStyles: {
      background: 'transparent',
      borderRadius: '50%',
      'border-color': color.primary,
    },
  });

  testComponentVariant({
    testId: 'icon',
    component: Icon,
    variant: 'squareOutlined',
    expectedResultingStyles: {
      background: 'transparent',
      borderRadius: '4px',
      'border-color': color.primary,
    },
  });
});
