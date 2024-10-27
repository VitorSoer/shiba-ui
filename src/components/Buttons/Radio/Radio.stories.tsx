import { t } from 'i18next';
import Radio from './index';
import { IRadio } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { formatKeyNamesForSummary } from '../../../utils/docs/storybook';

const meta: Meta<IRadio> = {
  title: 'Components/Buttons/Radio',
  component: Radio,
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: t('docs_value').replace('number', 'boolean'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
    handleChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(isChecked?: boolean) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    $radioSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '28' },
        category: 'Component',
      },
    },
    $radioColor: {
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

type Story = StoryObj<IRadio>;

export const Default: Story = {};

(Radio as React.FC).displayName = 'Radio';
