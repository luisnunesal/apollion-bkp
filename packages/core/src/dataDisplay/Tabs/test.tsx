import React, { useState } from 'react';
import userEvent from '@testing-library/user-event';

import { Tabs, TabsInterface, TabType } from '.';

import { render, screen } from '../../__tests__/setup';
import { Content } from '../../containers/Content';
import { Flex } from '../../containers/Flex';
import { Icon } from '../../elements/Icon';
import { BaseText } from '../../elements/Typography';

const FirstPage = () => (
  <Flex height="200px" justifyContent="center" data-testid="firstTabContent">
    <BaseText>First Sample Text</BaseText>
  </Flex>
);

const SecondPage = () => (
  <Flex height="200px" justifyContent="center" data-testid="secondTabContent">
    <BaseText>Second Sample Text</BaseText>
  </Flex>
);
const ThirdPage = () => (
  <Flex height="200px" justifyContent="center" data-testid="thirdTabContent">
    <BaseText>Third Sample Text</BaseText>
  </Flex>
);

const TabNotify = () => (
  <Content
    opener={<Icon name="emojiStar" size="small" color="warning" />}
    closer={<Icon name="emojiStar" size="small" color="warning" />}
  >
    Terceira Aba
  </Content>
);

const content: TabType[] = [
  {
    tabTitle: <span data-testid="firstTab">Primeira Aba</span>,
    content: <FirstPage />,
  },
  {
    tabTitle: <span data-testid="secondTab">Segunda Aba</span>,
    content: <SecondPage />,
    color: 'danger',
  },
  {
    tabTitle: <TabNotify />,
    content: <ThirdPage />,
    color: 'warning',
  },
];

const TestTabs = ({ tabs = content, ...props }: Partial<TabsInterface>) => {
  const [index, changeIndex] = useState(0);

  return <Tabs selectedIndex={index} onChange={changeIndex} tabs={tabs} {...props} />;
};

describe('Tabs', () => {
  it('Should render basic case', () => {
    render(<TestTabs />);

    expect(screen.getByTestId('firstTab')).toBeDefined();
    expect(screen.getByTestId('firstTabContent')).toBeDefined();

    expect(screen.getByTestId('secondTab')).toBeDefined();
    expect(screen.queryByTestId('secondTabContent')).toBeNull();

    expect(screen).toMatchSnapshot();
  });

  it('Should call onChange function', () => {
    const onChange = jest.fn();
    render(<TestTabs onChange={onChange} />);

    const secondTab = screen.getByTestId('secondTab');

    userEvent.click(secondTab);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Should start at any index', () => {
    render(<TestTabs selectedIndex={2} />);

    expect(screen.queryByTestId('firstTabContent')).toBeNull();
    expect(screen.queryByTestId('secondTabContent')).toBeNull();
    expect(screen.getByTestId('thirdTabContent')).toBeDefined();
  });
});
