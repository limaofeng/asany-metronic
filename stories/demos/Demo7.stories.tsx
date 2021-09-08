import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import Demo7 from '../../src/components/Layout/Demo7';
import { useStore } from './store';

import menus from './data/menus.json';
import services from './data/services.json';
import blogs from './data/blogs.json';
import banners from './data/banners.json';

const meta: Meta = {
  title: '演示/网站',
  parameters: {
    options: { showPanel: false },
  },
};

export default meta;

const Template: Story<any> = (_args) => {
  const store = useStore({});
  return (
    <Router>
      <Demo7 />
    </Router>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.storyName = '网站';

Default.args = {};
