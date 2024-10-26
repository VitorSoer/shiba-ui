import { t } from 'i18next';
import TextDisplay from '.';
import { ITextDisplay } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { fontSize } from '../../../theme/constants/fontSize';
import { fontFamily } from '../../../theme/constants/fontFamily';
import { fontWeight } from '../../../theme/constants/fontWeight';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';

const meta: Meta<ITextDisplay> = {
  title: 'Components/TextElements/TextDisplay',
  component: TextDisplay,
  argTypes: {
    text: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    $textColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'content' },
        category: 'Component',
      },
    },
    $fontSize: {
      control: 'text',
      description: t('docs_size_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontSize) },
        defaultValue: { summary: 'md' },
        category: 'Component',
      },
    },
    $fontFamily: {
      control: 'select',
      options: ['default', 'alternative'],
      description: t('docs_font_family'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontFamily) },
        defaultValue: { summary: 'default' },
        category: 'Component',
      },
    },
    $fontWeight: {
      control: 'text',
      description: t('docs_font_weight'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontWeight) },
        defaultValue: { summary: 'normal' },
        category: 'Component',
      },
    },
    $textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: t('docs_text_align'),
      table: {
        type: { summary: 'left | center | right | justify' },
        defaultValue: { summary: 'left' },
        category: 'Component',
      },
    },
    $lineHeight: {
      control: 'number',
      description: t('docs_line_height'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },
    $letterSpacing: {
      control: 'number',
      description: t('docs_letter_spacing'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'normal' },
        category: 'Component',
      },
    },
    $textDecoration: {
      control: 'text',
      description: t('docs_text_decoration'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'Component',
      },
    },
    isHidden: {
      control: 'boolean',
      description: t('docs_hide'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ITextDisplay>;

export const Default: Story = {
  args: {
    text: t('docs_sample_text'),
  },
};

(TextDisplay as React.FC).displayName = 'TextDisplay';
