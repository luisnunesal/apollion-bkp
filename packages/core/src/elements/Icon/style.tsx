import styled from 'styled-components';

import { IconStyleInterface } from './interface';

import { BaseContainer } from '../../containers/Base';

export const IconStyle = styled(BaseContainer)<IconStyleInterface>(({ theme, size }) => ({
  fontSize: size ? theme.spacing(size) : 'inherit',
  display: 'inline-block',
  lineHeight: 0,

  '& svg': {
    stroke: 'currentColor',
    fill: 'currentColor',
    strokeWidth: 0,
    '& g': {
      fill: 'currentColor',
    },
  },
}));
