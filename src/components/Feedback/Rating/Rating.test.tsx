import Rating from '.';
import { testRenderingOfComponent } from '../../../tests/functions';

describe('UI Component: Rating', () => {
  testRenderingOfComponent({
    testId: 'rating',
    component: Rating,
    componentProperties: {},
  });
});
