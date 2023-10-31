import type { Meta, StoryObj } from '@storybook/react';
import { ToDoList } from '.';

const meta = {
  title: 'Templates/ToDoList',
  component: ToDoList,
} satisfies Meta<typeof ToDoList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '공부하기',
  },
}