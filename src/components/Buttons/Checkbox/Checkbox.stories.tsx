import { t } from 'i18next';
import Checkbox from './index';
import { ICheckbox } from './types';
import * as iconList from '../../../assets/icons';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

const meta: Meta<ICheckbox> = {
  title: 'Components/Buttons/Checkbox',
  component: Checkbox,
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
    $checkboxSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '28' },
        category: 'Component',
      },
    },
    $checkboxColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
    icon: {
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
        defaultValue: { summary: '#F5F5FB' },
        category: 'Icon',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ICheckbox>;

export const Default: Story = {};

(Checkbox as React.FC).displayName = 'Checkbox';