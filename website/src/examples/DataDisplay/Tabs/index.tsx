import { Content, Flex, Icon, Tabs, Typography } from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

const FirstPage = () => (
  <Flex height="200px" justifyContent="center">
    <Typography text="Essa é primeira aba com um título de texto simpels :)" />
  </Flex>
);

const SecondPage = () => (
  <Flex height="200px" justifyContent="center">
    <Typography text="Oba você chegou na segunda aba! O titulo pode usar cores do tema como `danger`" />
  </Flex>
);
const ThirdPage = () => (
  <Flex height="200px" justifyContent="center">
    <Typography text="E esta é aba mais legal, O titulo pode ser qualquer componente (ReactNode) :)" />
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

export const TabsExample = () => {
  const [index, changeIndex] = React.useState(0);

  return (
    <BrowserOnly>
      {() => (
        <Tabs
          onChange={changeIndex}
          selectedIndex={index}
          tabs={[
            {
              tabTitle: 'Primeira Aba',
              content: <FirstPage />,
            },
            {
              tabTitle: 'Segunda Aba',
              content: <SecondPage />,
              color: 'danger',
            },
            {
              tabTitle: <TabNotify />,
              content: <ThirdPage />,
              color: 'warning',
            },
          ]}
        />
      )}
    </BrowserOnly>
  );
};

export const TabsExampleColor = () => {
  const [index, changeIndex] = React.useState(0);

  return (
    <BrowserOnly>
      {() => (
        <Tabs
          onChange={changeIndex}
          selectedIndex={index}
          tabs={[
            {
              tabTitle: 'Primeira Aba',
              color: 'warning',
              content: (
                <Flex height="200px" justifyContent="center">
                  <pre>
                    <code>
                      {JSON.stringify(
                        {
                          color: 'warning',
                        },
                        null,
                        2
                      )}
                    </code>
                  </pre>
                </Flex>
              ),
            },
            {
              tabTitle: 'Segunda Aba',
              color: 'danger',
              content: (
                <Flex height="200px" justifyContent="center">
                  <pre>
                    <code>
                      {JSON.stringify(
                        {
                          color: 'danger',
                        },
                        null,
                        2
                      )}
                    </code>
                  </pre>
                </Flex>
              ),
            },
          ]}
        />
      )}
    </BrowserOnly>
  );
};

export const TabsExampleActive = () => {
  const [index, changeIndex] = React.useState(0);

  return (
    <BrowserOnly>
      {() => (
        <Tabs
          onChange={changeIndex}
          selectedIndex={index}
          tabs={[
            {
              tabTitle: 'Primeira Aba',
              content: <FirstPage />,
            },
            {
              isActive: true,
              color: 'warning',
              tabTitle: (
                <Content
                  opener={<Icon name="emojiStar" size="small" />}
                  closer={<Icon name="emojiStar" size="small" />}
                >
                  Segunda Aba
                </Content>
              ),
              content: <ThirdPage />,
            },
          ]}
        />
      )}
    </BrowserOnly>
  );
};
