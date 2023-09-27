import styled from 'styled-components';

import { LisItemStyle } from './interface';

import { Flex } from '../../containers';
import { BackgroundFactory } from '../../factory';

export const ListStyle = styled(Flex)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItemStyle = styled(Flex)<LisItemStyle>`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    ${BackgroundFactory(
      ({ isSelected }: LisItemStyle) =>
        !isSelected && {
          bgColor: 'neutral.10',
        },
    )}
  }

  ${BackgroundFactory(
    ({ isSelected }: LisItemStyle) =>
      isSelected && {
        bgColor: 'neutral.40',
      },
  )}
`;
