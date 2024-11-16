import ProgressCircle from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: ProgressCircle', () => {
  testRenderingOfComponent({
    testId: 'progress-circle',
    component: ProgressCircle,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'progress-circle',
    component: ProgressCircle,
    propertiesToTest: { $progressCircleSize: 50 },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
    },
  });

  testComponentStyleByProperties({
    testId: 'progress-circle-base',
    component: ProgressCircle,
    propertiesToTest: { $progressCircleBaseColor: 'red' },
    expectedResultingStyles: {
      stroke: 'red',
    },
  });

  testComponentStyleByProperties({
    testId: 'progress-circle-range',
    component: ProgressCircle,
    propertiesToTest: { $progressCircleRangeColor: 'green' },
    expectedResultingStyles: {
      stroke: 'green',
    },
  });
});
