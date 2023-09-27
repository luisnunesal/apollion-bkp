import React, { useState } from 'react';

import { InputRangeMultipleInterface } from './interface';
import {
  InputRangeSimpleStyle,
  RangeStyle,
  SliderStyle,
  ThumbStyle,
  TooltipMultipleStyle,
  TrackStyle,
  WrapperStyle,
} from './style';

import { Flex } from '../../containers/Flex';
import { Typography } from '../../elements';
import { Input } from '../Input';

const getLeftPercentBar = (min: number, max: number, leftValue: number, rightValue: number) => {
  const v = Math.min(leftValue, rightValue - 1);
  return ((v - min) / (max - min)) * 100;
};

const getRightPercentBar = (min: number, max: number, leftValue: number, rightValue: number) => {
  const v = Math.max(rightValue, leftValue + 1);
  const percent = ((v - min) / (max - min)) * 100;

  return 100 - percent;
};

export const InputRangeMultipleComponent = (props: InputRangeMultipleInterface) => {
  const { leftValue } = props;
  const { rightValue } = props;

  const [inputLeftValue, setInputLeftValue] = useState(leftValue);
  const [inputRightValue, setInputRightValue] = useState(rightValue);
  const [leftPercentValue, setLeftPercentValue] = useState(
    getLeftPercentBar(
      parseInt(props.min, 10),
      parseInt(props.max, 10),
      parseInt(inputLeftValue, 10),
      parseInt(inputRightValue, 10),
    ),
  );
  const [rightPercentValue, setRightPercentValue] = useState(
    getRightPercentBar(
      parseInt(props.min, 10),
      parseInt(props.max, 10),
      parseInt(inputLeftValue, 10),
      parseInt(inputRightValue, 10),
    ),
  );

  function onInputLeft(e: React.ChangeEvent<HTMLInputElement>) {
    const targetLeftValue = e.target.value;
    /* @ts-ignore */
    setInputLeftValue(Math.min(parseInt(targetLeftValue, 10), inputRightValue));
    setLeftPercentValue(
      getLeftPercentBar(
        parseInt(props.min, 10),
        parseInt(props.max, 10),
        parseInt(inputLeftValue, 10),
        parseInt(inputRightValue, 10),
      ),
    );
  }

  function onInputRight(e: React.ChangeEvent<HTMLInputElement>) {
    const targetRightValue = e.target.value;
    /* @ts-ignore */
    setInputRightValue(Math.max(parseInt(targetRightValue, 10), inputLeftValue));
    setRightPercentValue(
      getRightPercentBar(
        parseInt(props.min, 10),
        parseInt(props.max, 10),
        parseInt(inputLeftValue, 10),
        parseInt(inputRightValue, 10),
      ),
    );
  }

  return (
    <Flex gap={4}>
      {props.label && (
        <Flex width="100%" justifyContent="between" alignItems="center" flexDirection="row">
          <Flex width="172px">
            <Typography variant="h6">Mínimo</Typography>
            <Input value={inputLeftValue} />
          </Flex>
          <Flex width="172px">
            <Typography variant="h6">Máximo</Typography>
            <Input value={inputRightValue} />
          </Flex>
        </Flex>
      )}
      {!props.label && (
        <Flex>
          <Tooltip position="left" percent={leftPercentValue}>
            {inputLeftValue}
          </Tooltip>
          <Tooltip position="right" percent={rightPercentValue}>
            {inputRightValue}
          </Tooltip>
        </Flex>
      )}
      <WrapperStyle>
        <InputRangeSimpleStyle min={props.min} max={props.max} value={inputLeftValue} onInput={onInputLeft} />
        <InputRangeSimpleStyle min={props.min} max={props.max} value={inputRightValue} onInput={onInputRight} />
        <SliderStyle>
          <TrackStyle />
          <RangeStyle percentLeft={leftPercentValue} percentRight={rightPercentValue} />
          <ThumbStyle side="left" percent={leftPercentValue} />
          <ThumbStyle side="right" percent={rightPercentValue} />
        </SliderStyle>
      </WrapperStyle>
    </Flex>
  );
};

const Tooltip: React.FC<{ position: string; percent: number }> = ({ children, percent, position }) => (
  <TooltipMultipleStyle position={position} percent={percent}>
    <Typography>{children}</Typography>
  </TooltipMultipleStyle>
);
