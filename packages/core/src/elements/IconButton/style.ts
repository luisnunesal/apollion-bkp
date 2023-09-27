import styled from 'styled-components';

import { IconButtonInterface } from './interface';

import { BorderFactory, FontFactory, SpacingFactory } from '../../factory';
import { ButtonStyle } from '../Button/style';

function iconButtonSize({ size }: IconButtonInterface) {
  switch (size) {
    case 'extraSmall':
      return [
        SpacingFactory({ p: 'micro' }),
        BorderFactory({ borderRadius: 'micro' }),
        FontFactory({ fontSize: 'micro' }),
      ];
    case 'small':
      return [
        SpacingFactory({ p: 'xs' }),
        BorderFactory({ borderRadius: 'circular' }),
        FontFactory({ fontSize: 'xs' }),
      ];
    case 'large':
      return [
        SpacingFactory({ p: 'medium' }),
        BorderFactory({ borderRadius: 'circular' }),
        FontFactory({ fontSize: 'medium' }),
      ];

    default:
      return [
        SpacingFactory({ p: 'small' }),
        BorderFactory({ borderRadius: 'circular' }),
        FontFactory({ fontSize: 'small' }),
      ];
  }
}

export const IconButtonStyle = styled(ButtonStyle)<IconButtonInterface>(iconButtonSize);
