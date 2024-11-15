import Skeleton from './index';
import { t } from 'i18next';
import { ISkeleton } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';
import { sizeSummary } from '../../../theme/constants/size';

const meta: Meta<ISkeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    $skeletonColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
    $skeletonWidth: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50px' },
        category: 'Component',
      },
    },
    $skeletonHeight: {
      control: 'number',
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50px' },
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
    $isFullSize: {
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

type Story = StoryObj<ISkeleton>;

export const Default: Story = {};

(Skeleton as React.FC).displayName = 'Skeleton';
