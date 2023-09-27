import React from 'react';
import { CustomScroll } from '@captalys-platform/core';
import styled from 'styled-components';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const count = (from = 0, to = 1, increment = 1) => {
  const array = [];
  for (let i = from; i <= to; i += increment) {
    array.push(i);
  }
  return array;
};

const Content = styled.div`
  height: 3rem;
  padding: 1rem;
  line-height: 1;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export function ScrollExample({ to = 100, children, ...props }: any) {
  return (
    <BrowserOnly>
      {() => (
        <CustomScroll {...props}>
          {children
            ? children
            : count(0, to).map((val) => <Content key={val}>{val}</Content>)}
        </CustomScroll>
      )}
    </BrowserOnly>
  );
}
