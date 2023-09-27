import { Link } from 'react-router-dom';

import { LinkInterface } from './interface';

import { ColorFactory, ContainerFactory, FontFactory, styled } from '../../factory';
import { buttonBaseStyles } from '../Button';

export const LinkStyle = styled(Link)<LinkInterface>(
  ColorFactory,
  ContainerFactory({ cursor: 'pointer' }),
  FontFactory({ textDecoration: 'underline' }),
);

export const LinkButtonStyle = styled(Link)<LinkInterface>`
  ${buttonBaseStyles};
  ${FontFactory({ lineHeight: 'tight' })};
`;
