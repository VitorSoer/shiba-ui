import { Meta, StoryObj } from '@storybook/react';
import ProgressCircle from './index';

import { IProgressCircle } from './types';
import { t } from 'i18next';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';
import { color } from '../../../theme/constants/color';

const meta: Meta<IProgressCircle> = {
  title: 'Components/Feedback/ProgressCircle',
  component: ProgressCircle,
  argTypes: {
    progressValue: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },
    $progressCircleSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '60' },
        category: 'Component',
      },
    },
    $progressCircleBaseColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'highlight' },
        category: 'Component',
      },
    },
    $progressCircleRangeColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IProgressCircle>;

export const Default: Story = {
  args: { progressValue: 30 },
};

(ProgressCircle as React.FC).displayName = 'ProgressCircle';