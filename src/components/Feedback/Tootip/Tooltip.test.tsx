import Tooltip from '.';
import React from 'react';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
} from '../../../tests/functions';

describe('UI Component: Tooltip', () => {
  testRenderingOfComponent({
    testId: 'tooltip',
    component: Tooltip,
    componentProperties: { children: <p>Hello</p>, content: 'Test Tooltip' },
  });

  testComponentStyleByProperties({
    testId: 'tooltip',
    component: Tooltip,
    propertiesToTest: {
      children: <p>Hello</p>,
      content: 'Test Tooltip',
      $backgroundColor: 'orange',
    },
    expectedResultingStyles: {
      background: 'orange',
    },
  });

  testComponentVisibility({
    testId: 'tooltip',
    component: Tooltip,
    componentProperties: { children: <p>Hello</p>, content: 'Test Tooltip' },
  });
});