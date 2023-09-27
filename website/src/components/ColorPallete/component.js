import React, { useContext, useEffect } from 'react';
import {
  BaseContainer,
  Flex,
  getContrastColor,
  getValue,
  BaseText,
  Icon,
  IconStyle,
  Text,
  useClipboard,
  useNotification,
} from '@captalys-platform/core';
import styled from 'styled-components';

import { ColorPalleteContext } from './context';

const Card = styled(Flex)`
  cursor: pointer;
  height: 64px;
  padding: 1rem;
  overflow: hidden;

  & ${IconStyle} {
    opacity: 0;
    transition: all 100ms linear;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  &:hover ${IconStyle} {
    opacity: 1;
  }
`;

const GroupContainer = styled(BaseContainer)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
`;

export function Pallete({ color }) {
  const { colors } = useContext(ColorPalleteContext);
  const { showNotification } = useNotification();
  const { onCopy, hasCopied } = useClipboard(color, 25000);

  useEffect(() => {
    if (hasCopied) {
      showNotification({
        autoClose: 2,
        title: 'Copiado',
        message: color,
      });
    }
  }, [hasCopied, color]);

  const [name, subname] = color.split('.');
  const colorHex = getValue(color, colors);

  const style = {
    backgroundColor: colorHex,
    color: getContrastColor(colorHex),
  };

  return (
    <Card
      flexDirection="row"
      justifyContent="between"
      alignItems="center"
      style={style}
      onClick={onCopy}
    >
      <BaseText weight="light">{subname || name}</BaseText>
      <BaseText>{colorHex}</BaseText>

      <Icon size={3.5}>
        <svg viewBox="0 0 448 512">
          <path d="M320 448v40a24 24 0 01-24 24H24a24 24 0 01-24-24V120a24 24 0 0124-24h72v296a56 56 0 0056 56h168zm0-344V0H152a24 24 0 00-24 24v368a24 24 0 0024 24h272a24 24 0 0024-24V128H344a24 24 0 01-24-24zm121-31L375 7a24 24 0 00-17-7h-6v96h96v-6a24 24 0 00-7-17z" />
        </svg>
      </Icon>
    </Card>
  );
}

export function PalleteGroup({ groupName, color }) {
  return (
    <Flex gap="small">
      <Text fontWeight="bold" color="main.dark" textTransform="captalyze">
        {groupName || color}
      </Text>

      <Flex>
        <Pallete color={`${color}.base`} />
        <Pallete color={`${color}.dark`} />
        <Pallete color={`${color}.action`} />
        <Pallete color={`${color}.active`} />
        <Pallete color={`${color}.light`} />
      </Flex>
    </Flex>
  );
}

export const Colors = () => (
  <Flex gap="large">
    <h3>Cores de Marca</h3>

    <GroupContainer>
      <PalleteGroup color="main" />
      <PalleteGroup color="opposite" />
      <PalleteGroup color="complementary" />
    </GroupContainer>

    <h3>Cores de Função</h3>

    <GroupContainer>
      <PalleteGroup color="primary" />
      <PalleteGroup color="secondary" />
      <PalleteGroup color="tertiary" />
    </GroupContainer>

    <h3>Cores de resposta</h3>

    <GroupContainer>
      <PalleteGroup color="information" />
      <PalleteGroup color="success" />
      <PalleteGroup color="warning" />
      <PalleteGroup color="danger" />
    </GroupContainer>

    <h3>Cores de Tonalidade</h3>

    <GroupContainer>
      <Flex gap="medium">
        <Text fontWeight="bold" color="main.dark" textTransform="captalyze">
          neutral
        </Text>

        <Flex>
          <Pallete color="neutral.0" />
          <Pallete color="neutral.5" />
          <Pallete color="neutral.10" />
          <Pallete color="neutral.20" />
          <Pallete color="neutral.30" />
          <Pallete color="neutral.40" />
          <Pallete color="neutral.50" />
          <Pallete color="neutral.60" />
          <Pallete color="neutral.70" />
          <Pallete color="neutral.80" />
          <Pallete color="neutral.90" />
          <Pallete color="neutral.100" />
          <Pallete color="neutral.110" />
          <Pallete color="neutral.120" />
          <Pallete color="neutral.130" />
          <Pallete color="neutral.140" />
          <Pallete color="neutral.150" />
          <Pallete color="neutral.160" />
          <Pallete color="neutral.170" />
          <Pallete color="neutral.180" />
        </Flex>
      </Flex>

      <Flex gap="medium">
        <Text fontWeight="bold" color="main.dark" textTransform="captalyze">
          gray
        </Text>

        <Flex>
          <Pallete color="grayscale.0" />
          <Pallete color="grayscale.5" />
          <Pallete color="grayscale.10" />
          <Pallete color="grayscale.20" />
          <Pallete color="grayscale.30" />
          <Pallete color="grayscale.40" />
          <Pallete color="grayscale.50" />
          <Pallete color="grayscale.60" />
          <Pallete color="grayscale.70" />
          <Pallete color="grayscale.80" />
          <Pallete color="grayscale.90" />
          <Pallete color="grayscale.100" />
        </Flex>
      </Flex>
    </GroupContainer>
  </Flex>
);
