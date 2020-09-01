import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');

  ReactDOM.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

  // Task 6 (pinned) should by rendered first
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  // Isn't null
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});