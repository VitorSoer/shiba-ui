import PieChart from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: PieChart', () => {
  testRenderingOfComponent({
    testId: 'pie-chart',
    component: PieChart,
    componentProperties: {
      data: [{ color: 'red', label: 'Jest Test', percent: 100 }],
    },
  });

  testComponentStyleByProperties({
    testId: 'pie-chart',
    component: PieChart,
    propertiesToTest: {
      data: [{ color: 'red', label: 'Jest Test', percent: 100 }],
      $pieChartSize: 200,
    },
    expectedResultingStyles: {
      width: '200px',
      height: '200px',
    },
  });
});
