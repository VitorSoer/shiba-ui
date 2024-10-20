import { t } from 'i18next';
import Icon from './index';
import { color } from '../../../theme/constants/color';
import * as iconList from '../../../assets/icons';
import { IIconProps } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { boxShadow } from '../../../theme/constants/boxShadow';
import {
  formatEntryNamesForSummary,
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

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
        defaultValue: { summary: 'ForwardIcon' },
        category: 'Component',
      },
    },
    $variant: {
      control: 'select',
      options: ['icon', 'circle', 'square', 'circleOutlined', 'squareOutlined'],
      description: t('docs_variant'),
      table: {
        type: {
          summary:
            "'icon' | 'circle' | 'square' | 'circleOutlined' | 'squareOutlined'",
        },
        defaultValue: { summary: 'icon' },
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
    $background: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
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
    $boxSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'fit-content' },
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
  },
};

export default meta;

type Story = StoryObj<IIconProps>;

export const Default: Story = {
  args: {
    icon: 'ForwardIcon',
  },
};

export const Circle: Story = {
  args: {
    icon: 'BugIcon',
    $variant: 'circle',
  },
};

export const Square: Story = {
  args: {
    icon: 'BellIcon',
    $variant: 'square',
  },
};

export const CircleOutlined: Story = {
  args: {
    icon: 'CameraIcon',
    $variant: 'circleOutlined',
  },
};

export const SquareOutlined: Story = {
  args: {
    icon: 'TrophyIcon',
    $variant: 'squareOutlined',
  },
};

(Icon as React.FC).displayName = 'Icon';
