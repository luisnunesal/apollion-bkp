import styled from 'styled-components';

import { BaseContainer } from '../../containers/Base';
import { CircleStyle } from '../../scenario/CircleComponent';

export const SpinnerStyle = styled(BaseContainer)`
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerCircle = styled(CircleStyle)`
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
