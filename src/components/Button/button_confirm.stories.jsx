import React from 'react';
import { Button } from './button';

export default {
  title: 'Components/Button/Confirm',
  component: Button,
  tags: ['autodocs'],
  argTypes: {

    // 버튼 타입 선택
    type: {
      control:'select',
      options:["submit","confirm"]
    },
    // 버튼 동작 선택
    variant: {
      control: 'select',
      options: ["default", 'hover', 'click','disabled','loading'],
    },
    // 버튼 사이즈 선택
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

