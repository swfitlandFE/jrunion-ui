import type { Meta, StoryObj } from '@storybook/react';

import JrButton from '../components/Button';
import React from 'react';

type Story = StoryObj<typeof JrButton>;

const meta: Meta<typeof JrButton> = {
  title: 'jrunion/Button',
  component: JrButton,
  tags: ['autodocs'],
};

export const Primary: Story = {
    args: {
      primary: true,
      text: 'Button',
    },
};

export const Secondary: Story = (args) => (
    <JrButton data-testId="InputField-id" {...args} />
);

Secondary.args = {
    primary: false,
    disabled: false,
    text: "Secondary",
};

export default meta;