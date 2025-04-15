import React from 'react';
import { Button } from './button'; // 실제 컴포넌트 경로로 변경해줘

export default {
  title: 'Components/Button/Confirm',
  component: Button,
  tags: ['autodocs'], // 최신 스토리북에서는 docs 자동화용
  argTypes: {
    type: {
      control:'select',
      options:["submit","confirm"]
    },
    variant: {
      control: 'select',
      options: ["default", 'hover', 'click','disabled'],
    },
    size: {
      control: 'select',
      options: ['default','sm','lg'],
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type:"confirm",
  children: 'Default Button',
  variant:'default',
};

export const Hover = Template.bind({});
Hover.args = {
  type:"confirm",
  children: 'Hover Button',
  variant: 'hover',
};

export const Click = Template.bind({});
Click.args = {
  type:"confirm",
  children: 'Click Button',
  variant:'click'
};

export const Disabled = Template.bind({});
Disabled.args = {
  type:"confirm",
  children: 'Disabled Button',
  variant:'disabled'
};
export const Loading = Template.bind({});
Loading.args = {
  type:"confirm",
  variant: 'loading',
  children: (
    <div className="flex gap-1 items-center justify-center">
      <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 rounded-full bg-white animate-bounce" />
    </div>
  )
};

