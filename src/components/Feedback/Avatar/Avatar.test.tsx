import Avatar from '.';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
} from '../../../tests/functions';

describe('UI Component: Avatar', () => {
  testRenderingOfComponent({
    testId: 'avatar-image',
    component: Avatar,
    componentProperties: { image: 'https://encurtador.com.br/Kw9pE' },
  });

  testRenderingOfComponent({
    testId: 'avatar-text',
    component: Avatar,
    componentProperties: { userName: 'Habibi Cat' },
  });

  testComponentStyleByProperties({
    testId: 'avatar-text',
    component: Avatar,
    propertiesToTest: {
      userName: 'Habibi Cat',
      $avatarSize: 100,
      $avatarColor: 'red',
      $boxShadow: 'rm',
    },
    expectedResultingStyles: {
      width: '100px',
      height: '100px',
      background: 'red',
      'box-shadow': 'none',
    },
  });
});
