import Skeleton from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: Skeleton', () => {
  testRenderingOfComponent({
    testId: 'skeleton',
    component: Skeleton,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'skeleton',
    component: Skeleton,
    propertiesToTest: {
      $skeletonHeight: 25,
      $skeletonWidth: 45,
      $borderRadius: 'md',
      $skeletonColor: 'red',
    },
    expectedResultingStyles: {
      width: '45px',
      height: '25px',
      background: 'red',
      'border-radius': '16px',
    },
  });

  testComponentStyleByProperties({
    testId: 'skeleton',
    component: Skeleton,
    propertiesToTest: {
      $isFullSize: true,
    },
    expectedResultingStyles: {
      width: '100%',
      height: '100%',
    },
  });
});
