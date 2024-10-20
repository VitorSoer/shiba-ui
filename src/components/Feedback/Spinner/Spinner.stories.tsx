import { t } from 'i18next';
import Spinner from './index';
import { ISpinner } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';

const meta: Meta<ISpinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    $spinnerSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
        category: 'Component',
      },
    },
    $spinnerColor: {
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

type Story = StoryObj<ISpinner>;

export const Default: Story = {};

(Spinner as React.FC).displayName = 'Spinner';
