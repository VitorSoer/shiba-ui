import '../i18n/index';
import type { Preview } from '@storybook/react';
import { color } from '../../src/theme/constants/color';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { i18nDecorator } from '../decorators/i18nDecorator';
import LanguageSelector from '../i18n/components/LanguageSelector';

export const decorators = [i18nDecorator];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    viewport: { ...INITIAL_VIEWPORTS },
    backgrounds: {
      default: 'cotton',
      values: [
        {
          name: 'cotton',
          value: color.cotton,
        },
        {
          name: 'obsidian',
          value: color.obsidian,
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: LanguageSelector,
    },
  },
};

export default preview;
