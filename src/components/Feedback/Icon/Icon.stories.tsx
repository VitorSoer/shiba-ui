import { t } from 'i18next';
import Icon from './index';
import { color } from '../../../theme/constants/color';
import * as iconList from '../../../assets/icons';
import { IIconProps } from './types';
import { Meta, StoryObj } from '@storybook/react';

import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../functions/storybook';

const meta: Meta<IIconProps> = {
  title: 'Components/Feedback/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: getEntryOptionsForSummary(iconList),
      description: t('docs_icon_selection'),
      table: {
        type: { summary: formatEntryNamesForSummary(iconList) },
        defaultValue: { summary: 'ErrorIcon' },
        category: 'Component',
      },
    },
    $iconSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '"20"' },
        category: 'Component',
      },
    },
    $iconColor: {
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

type Story = StoryObj<IIconProps>;

export const Default: Story = {};

(Icon as React.FC).displayName = 'Icon';
