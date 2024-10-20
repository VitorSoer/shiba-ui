import TextDisplay from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentText,
} from '../../../tests/functions';

describe('UI Component: TextDisplay', () => {
  testRenderingOfComponent({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Test Text' },
  });

  testComponentText({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Helloooooo!' },
    expectedText: 'Helloooooo!',
  });

  testComponentStyleByProperties({
    testId: 'text-display',
    component: TextDisplay,
    propertiesToTest: {
      text: 'Test Text',
      $textColor: 'blue',
      $fontSize: '5x',
      $fontWeight: 'heavy',
      $fontFamily: 'alternative',
      $textAlign: 'right',
      $lineHeight: 10,
      $letterSpacing: 1,
      $textDecoration: 'underline',
    },
    expectedResultingStyles: {
      color: 'blue',
      'font-size': '3.2rem',
      'font-weight': '800',
      'font-family': 'roboto',
      'text-align': 'right',
      'line-height': '10px',
      'letter-spacing': '1px',
      textDecoration: 'underline',
    },
  });

  testComponentVisibility({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: {},
  });
});
