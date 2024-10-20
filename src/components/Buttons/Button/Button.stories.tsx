import Button from '.';
import { t } from 'i18next';
import { IButton } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { fontSize } from '../../../theme/constants/fontSize';
import { fontFamily } from '../../../theme/constants/fontFamily';
import { fontWeight } from '../../../theme/constants/fontWeight';
import { sizeSummary } from '../../../theme/constants/size';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';
import * as iconList from '../../../assets/icons';
import { spacing } from '../../../theme/constants/spacing';
import { boxShadow } from '../../../theme/constants/boxShadow';

const meta: Meta<IButton> = {
  title: 'Components/Buttons/Button',
  component: Button,
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
    onClick: {
      description: t('docs_click'),
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    $variant: {
      control: 'select',
      options: ['solid', 'outlined', 'text'],
      description: t('docs_variant'),
      table: {
        type: { summary: "'solid' | 'outlined' | 'text'" },
        defaultValue: { summary: "solid" },
        category: 'Component',
      },
    },
    isLoading: {
      control: 'boolean',
      description: t('docs_loading'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    $isDisabled: {
      control: 'boolean',
      description: t('docs_disabled'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
    $buttonColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
    $width: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'auto' },
        category: 'Component',
      },
    },
    $height: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40px' },
        category: 'Component',
      },
    },
    $padding: {
      control: 'text',
      description: t('docs_size_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(spacing) },
        defaultValue: { summary: 'xs sm' },
        category: 'Component',
      },
    },
    $gap: {
      control: 'text',
      description: t('docs_size_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(spacing) },
        defaultValue: { summary: 'sm' },
        category: 'Component',
      },
    },

    $borderRadius: {
      control: 'text',
      description: t('docs_size_predefined'),
      table: {
        type: { summary: sizeSummary },
        defaultValue: { summary: 'xs' },
        category: 'Component',
      },
    },
    $borderColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
    $borderWidth: {
      control: 'text',
      description: t('docs_size_predefined'),
      table: {
        type: { summary: sizeSummary },
        defaultValue: { summary: 'rm' },
        category: 'Component',
      },
    },
    $boxShadow: {
      control: 'select',
      options: getEntryOptionsForSummary(boxShadow),
      description: t('docs_shadow'),
      table: {
        type: { summary: formatKeyNamesForSummary(boxShadow) },
        defaultValue: { summary: 'rm' },
        category: 'Component',
      },
    },
    $fullWidth: {
      control: 'boolean',
      description: t('docs_full_width'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
    leftIcon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_icon_selection'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },
    rightIcon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_icon_selection'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },
    $iconColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Icon',
      },
    },
    $iconSize: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '16px' },
        category: 'Icon',
      },
    },
    $spinnerSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
        category: 'Spinner',
      },
    },
    $spinnerColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Spinner',
      },
    },
    $textColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'cotton' },
        category: 'Text Display',
      },
    },
    $fontSize: {
      control: 'text',
      description: t('docs_size_predefined'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontSize) },
        defaultValue: { summary: 'md' },
        category: 'Text Display',
      },
    },
    $fontFamily: {
      control: 'select',
      options: ['default', 'alternative'],
      description: t('docs_font_family'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontFamily) },
        defaultValue: { summary: 'default' },
        category: 'Text Display',
      },
    },
    $fontWeight: {
      control: 'text',
      description: t('docs_font_weight'),
      table: {
        type: { summary: formatKeyNamesForSummary(fontWeight) },
        defaultValue: { summary: 'normal' },
        category: 'Text Display',
      },
    },
    $textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: t('docs_text_align'),
      table: {
        type: { summary: 'left | center | right | justify' },
        defaultValue: { summary: 'center' },
        category: 'Text Display',
      },
    },
    $lineHeight: {
      control: 'number',
      description: t('docs_line_height'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Text Display',
      },
    },
    $letterSpacing: {
      control: 'number',
      description: t('docs_letter_spacing'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Text Display',
      },
    },
    $textDecoration: {
      control: 'text',
      description: t('docs_text_decoration'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
        category: 'Text Display',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IButton>;

export const Default: Story = {
  args: {
    text: t('docs_sample_text'),
    onClick: () => alert('Clicked!'),
    $width: 200,
  },
};

export const Outlined: Story = {
  args: {
    text: 'Sample text',
    $variant: 'outlined',
    $width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Text: Story = {
  args: {
    text: 'Sample text',
    $variant: 'text',
    $width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    text: 'Sample text',
    $isDisabled: true,
    $width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Loading: Story = {
  args: {
    text: 'Sample text',
    isLoading: true,
    $width: 200,
    onClick: () => alert('Clicked!'),
  },
};

(Button as React.FC).displayName = 'Button';
