import React from 'react';
import { CardWithForm } from './popup';

export default {
  title: 'Components/Popup',
  component: CardWithForm,
  tags: ['autodocs'],
  argTypes: {
    button1: {
      control: 'object',
      description: '첫 번째 버튼 설정',
    },
    button2: {
      control: 'object',
      description: '두 번째 버튼 설정',
    },
    button3: {
      control: 'object',
      description: '세 번째 버튼 설정 (선택사항)',
    },
  },
};

const Template = (args) => {
  const buttons = [args.button1, args.button2, args.button3].filter(Boolean);
  return <CardWithForm {...args} buttons={buttons} />;
};

export const 확인알림 = Template.bind({});
확인알림.args = {
  title: '알림',
  content: '유진님이 보낸 요청이 도착하였습니다.',
  button1: { children: '확인하기', type: 'submit', size: 'lg' },
};

export const 버튼없는팝업 = Template.bind({});
버튼없는팝업.args = {
  title: '공지',
  content: '당신의 레벨이 골드(+2)로 평가되었습니다.',
};

export const 버튼여러개 = Template.bind({});
버튼여러개.args = {
  title: '공지',
  content: (
    <div>
      <p>백준 1001번</p>
      <p>백준 1001번</p>
      <p>백준 1001번</p>
      <p>백준 1001번</p>
      <p>백준 1001번</p>
    </div>
  ),
  button1: { children: '수락', type: 'submit', size: 'default' },
  button2: { children: '거절', type: 'confirm', size: 'default' },
};