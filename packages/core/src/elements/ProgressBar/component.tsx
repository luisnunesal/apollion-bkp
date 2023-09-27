import React, { forwardRef } from 'react';

import { ProgressBarInterface } from './interface';
import { ProgerssOverlayStyle, ProgressBarStyle, ProgressContainer } from './style';

import { BaseText } from '../Typography';

export const ProgressBarComponent = forwardRef<HTMLDivElement, ProgressBarInterface>(
  ({ color, border, size, progress, showProgressLabel }, ref) => {
    const translate = -100 + Number(progress);

    return (
      <ProgressContainer color={color} justifyContent="center" alignItems="center" ref={ref}>
        <ProgerssOverlayStyle size={size} border={border}>
          <ProgressBarStyle style={{ transform: `translateX(${translate}%)` }} />
        </ProgerssOverlayStyle>
        {showProgressLabel && <BaseText>{progress}%</BaseText>}
      </ProgressContainer>
    );
  },
);

ProgressBarComponent.defaultProps = {
  size: 'medium',
  color: 'primary',
  progress: 0,
  showProgressLabel: false,
};
