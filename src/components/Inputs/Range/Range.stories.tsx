import { Meta, StoryObj } from '@storybook/react';
import Range from './index';
import { IRange } from './types';
import { t } from 'i18next';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';
import { color } from '../../../theme/constants/color';

const meta: Meta<IRange> = {
  title: 'Components/Inputs/Range',
  component: Range,
  argTypes: {
    value: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },
    min: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },
    max: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
        category: 'Component',
      },
    },
    handleChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(range: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    $width: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200px' },
        category: 'Component',
      },
    },
    $height: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8px' },
        category: 'Component',
      },
    },
    $thumbSize: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '18px' },
        category: 'Component',
      },
    },
    $thumbColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
    $background: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'Quartz' },
        category: 'Component',
      },
    },
    $trackColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
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
  },
};

export default meta;

type Story = StoryObj<IRange>;

export const Default: Story = {
  args: {
    value: 0,
  },
};

(Range as React.FC).displayName = 'Range';
