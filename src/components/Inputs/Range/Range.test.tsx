import Range from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentAttributes,
} from '../../../tests/functions';

describe('UI Component: Range', () => {
  testRenderingOfComponent({
    testId: 'range',
    component: Range,
    componentProperties: { value: 0 },
  });

  testComponentAttributes({
    testId: 'range',
    component: Range,
    componentProperties: { value: 35, min: 20, max: 80 },
    expectedAttributes: {
      value: 35,
      min: 20,
      max: 80,
    },
  });

  testComponentStyleByProperties({
    testId: 'range',
    component: Range,
    propertiesToTest: {
      value: 0,
      $width: 50,
      $height: 50,
      $thumbColor: 'tangerine',
    },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      background: 'tangerine',
    },
  });

  testComponentStyleByProperties({
    testId: 'range',
    component: Range,
    propertiesToTest: {
      value: 0,
      $fullWidth: true,
    },
    expectedResultingStyles: {
      width: '100%',
    },
  });
});
