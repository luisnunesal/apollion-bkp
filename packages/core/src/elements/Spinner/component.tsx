import React, { forwardRef } from 'react';

import { SpinnerInterface } from './interface';
import { SpinnerCircle, SpinnerStyle } from './style';

export const SpinnerComponent = forwardRef<SVGSVGElement, SpinnerInterface>(({ size, ...props }, ref) => {
  const computedSize = size || '1em';

  return (
    <SpinnerStyle as="svg" viewBox="0 0 50 50" {...props} width={computedSize} height={computedSize} ref={ref}>
      <SpinnerCircle cx="25" cy="25" r="20" />
    </SpinnerStyle>
  );
});
