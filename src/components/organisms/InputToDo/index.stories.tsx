import type { Meta, StoryObj } from '@storybook/react';
import { InputToDo } from '.';

const meta = {
  title: 'Organisms/InputToDo',
  component: InputToDo,
} satisfies Meta<typeof InputToDo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '공부하기',
  },
}