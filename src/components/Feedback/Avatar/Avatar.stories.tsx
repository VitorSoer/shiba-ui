import { t } from 'i18next';
import Avatar from './index';
import { IAvatar } from './types';
import { Meta, StoryObj } from '@storybook/react';
import { color } from '../../../theme/constants/color';
import { boxShadow } from '../../../theme/constants/boxShadow';
import {
  formatKeyNamesForSummary,
  getEntryOptionsForSummary,
} from '../../../utils/docs/storybook';

const meta: Meta<IAvatar> = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: 'text',
      description: t('docs_image'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    userName: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    $avatarColor: {
      control: 'color',
      description: t('docs_color'),
      table: {
        type: { summary: formatKeyNamesForSummary(color) },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },
    $avatarSize: {
      control: { type: 'number' },
      description: t('docs_size'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
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

type Story = StoryObj<IAvatar>;

export const Default: Story = {
  args: {
    image: 'https://encurtador.com.br/Kw9pE',
  },
};

export const AvatarText: Story = {
  args: {
    userName: 'User',
  },
};

(Avatar as React.FC).displayName = 'Avatar';
