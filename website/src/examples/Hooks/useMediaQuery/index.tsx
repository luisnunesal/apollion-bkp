import {
  Button,
  Card,
  Flex,
  Image,
  useMediaQuery,
  Text,
} from '@captalys-platform/core';
import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

export function CardExample() {
  const { isMobile } = useMediaQuery();

  return (
    <Card
      width={300}
      media={
        <Image cover height={200} src="http://picsum.photos/200?random=10" />
      }
      actionComponent={
        <Flex
          gap="medium"
          alignItems="center"
          justifyContent="between"
          flexDirection={isMobile ? 'column-reverse' : 'row'}
        >
          <Button
            size="small"
            color="danger"
            text="Deletar"
            variant="outlined"
            fullWidth={isMobile}
          />
          <Button size="small" text="Confirmar" fullWidth={isMobile} />
        </Flex>
      }
    >
      <Text variant="p">Uhuul Botões de ação</Text>
    </Card>
  );
}

function Example() {
  const query = useMediaQuery();

  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            ...query,
          },
          null,
          2
        )}
      </code>
    </pre>
  );
}

export function MediaQueryExample() {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => <Example />}
    </BrowserOnly>
  );
}
