import React from 'react';
import { Flex, Button, Typography, Image } from '@captalys-platform/core';

export const FlexCardExample = () => {
  return (
    <Flex
      maxWidth={280}
      minWidth={220}
      borderWidth="thin"
      borderRadius="xs"
      borderStyle="solid"
      borderColor="neutral.40"
      overflow="hidden"
    >
      <Flex height={200}>
        <Image cover src="https://picsum.photos/200" />
      </Flex>
      <Flex p="small">
        <Typography
          text="Lorem ipsum"
          color="grayscale.80"
          fontSize="medium"
          fontWeight="bold"
        />
        <Typography color="grayscale.80">
          R$ 1,900.00
          <Typography color="grayscale.50" fontSize="small">
            / mês
          </Typography>
        </Typography>
        <Flex flexDirection="row" justifyContent="flex-end" mt="small">
          <Button size="small" variant="outlined" text="Alugar" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export const FlexBackgroundExample = ({ color }: any) => {
  return (
    <Flex height={100} justifyContent="center" bgColor={color}>
      <Typography
        align="center"
        contrast={color}
        text="lorem ipsum dolor sit amet"
        fontSize="large"
        fontWeight="bold"
      />
    </Flex>
  );
};
