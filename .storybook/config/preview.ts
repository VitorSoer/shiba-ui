import '../i18n/index';
import type { Preview } from '@storybook/react';
import { color } from '../../src/theme/constants/color';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { i18nDecorator } from '../decorators/i18nDecorator';
import LanguageSelector from '../i18n/components/LanguageSelector';
import { CenterDecorator } from '../decorators/centerDecorator';

export const decorators = [i18nDecorator, CenterDecorator];

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Mantém o layout fullscreen
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
