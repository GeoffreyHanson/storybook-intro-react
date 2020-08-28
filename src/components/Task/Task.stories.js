import React from 'react';
import Task from './Task';

// This file contains all of the states (stories) for the component.

// Exporting the task and its title.
export default {
  component: Task,
  title: 'Task', // Sidebar title
};

// Function that takes the arguments and turn them into components
const Template = (args) => <Task {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task', 
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

// Binding Pinned to the Template
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

// Binding Archived to the Template
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};