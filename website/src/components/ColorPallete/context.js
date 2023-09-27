/* eslint-disable @typescript-eslint/no-use-before-define, react/jsx-filename-extension */
import React, { createContext, useCallback, useMemo, useState } from 'react';
import {
  createColors,
  defaultInputColors,
  Flex,
  getOppositeColor,
} from '@captalys-platform/core';

import { Code } from '../Code';
import { InputColor } from './inputColor';

const colorsArray = [
  'main',
  'primary',
  'secondary',
  'tertiary',
  'information',
  'success',
  'danger',
  'warning',
];

export const ColorPalleteContext = createContext({
  inputColors: defaultInputColors,
  colors: {},
});

export const ColorPalleteProvider = ({ children }) => {
  const [inputColors, setInputColor] = useState(defaultInputColors);
  const colors = useMemo(() => createColors(inputColors), [inputColors]);

  const changeColor = useCallback(
    (target) => (color) => {
      setInputColor((colors) => ({
        ...colors,
        [target]: color,
        opposite: target === 'main' ? getOppositeColor(color) : colors.opposite,
      }));
    },
    []
  );

  const code = useMemo(
    () => JSON.stringify({ colors: { ...inputColors } }, null, 2),
    [inputColors]
  );

  return (
    <ColorPalleteContext.Provider value={{ colors, inputColors }}>
      <Flex flexDirection="row" gap="large">
        <Flex gap="xs">
          {colorsArray.map((color) => (
            <InputColor
              key={color}
              color={color}
              onChange={changeColor(color)}
            />
          ))}
        </Flex>

        <Flex flex="fluid">
          <Code language="js">{`const theme = createTheme(${code})`}</Code>
        </Flex>
      </Flex>

      <Flex mt="xl">{children}</Flex>
    </ColorPalleteContext.Provider>
  );
};
