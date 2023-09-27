import React, { useState, useContext, useCallback } from 'react';
import {
  getContrastColor,
  Text,
  Icon,
  Flex,
  IconStyle,
} from '@captalys-platform/core';
import styled, { useTheme } from 'styled-components';
import debounce from 'lodash.debounce';

import { ColorPalleteContext } from './context';

const Label = styled(Flex)`
  cursor: pointer;

  & ${IconStyle} {
    opacity: 0;
    transition: all 200ms linear;
  }

  &:hover ${IconStyle} {
    opacity: 1;
  }
`;

export const InputColor = ({ color, onChange: setColor }) => {
  const theme = useTheme();

  const { inputColors } = useContext(ColorPalleteContext);

  const value = inputColors[color];

  const [inputValue, setValue] = useState(() => value);

  const setNewColor = useCallback(debounce(setColor, 400), []);

  const onChange = (e) => {
    setValue(e.target.value);
    setNewColor(e.target.value);
  };

  const contrastColor = getContrastColor(value);

  return (
    <Label
      as="label"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderRadius="micro"
      p="xs"
      width={120}
      style={{
        color: contrastColor,
        backgroundColor: value,
      }}
    >
      <Text textTransform="captalyze" style={{ color: contrastColor }}>
        {color}
      </Text>

      <Icon name="edit" />

      <input value={inputValue} onChange={onChange} type="color" hidden />
    </Label>
  );
};
