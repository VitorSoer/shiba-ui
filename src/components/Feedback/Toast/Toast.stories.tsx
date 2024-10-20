import React from 'react';
import ToastContainer, { toast } from './index';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../../Buttons/Button';
import { ToastType } from './types';
import { t } from 'i18next';

const meta: Meta<typeof ToastContainer> = {
  title: 'Components/Feedback/Toast',
  component: ToastContainer,
  parameters: {
    docs: {
      description: {
        component: t('docs_toast'),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

export const DefaultOptions: Story = {
  render: () => {
    const showToast = (message: string, type: ToastType) => {
      return toast[type](message, { $width: 280 });
    };

    return (
      <>
        <Button
          text="Success"
          onClick={() => showToast('Shiba UI - Toast Success', 'success')}
          $buttonColor="success"
          $width={100}
        />
        <Button
          text="Warning"
          onClick={() => showToast('Shiba UI - Toast Warning', 'warning')}
          $buttonColor="warning"
          $width={100}
        />
        <Button
          text="Error"
          onClick={() => showToast('Shiba UI - Toast Error', 'error')}
          $buttonColor="error"
          $width={100}
        />
        <Button
          text="Custom"
          onClick={() =>
            toast.success('Shiba UI - Toast Custom', {
              $background: 'content',
              $borderColor: 'primary',
              $messageColor: 'primary',
              timeout: 5000,
            })
          }
          $buttonColor="primary"
          $width={100}
        />
        <ToastContainer />
      </>
    );
  },
};
