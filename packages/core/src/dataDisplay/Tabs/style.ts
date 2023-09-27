import styled from 'styled-components';

import { TabButtonInterface } from './interface';

import { Flex } from '../../containers';
import { ButtonStyle } from '../../elements/Button';
import { getColor } from '../../themes';

export const TabsHeaderStyle = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral['20']};

  & > ${Flex} {
    transform: translateY(1px);
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    > ${Flex} {
      overflow-x: scroll;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const TabButtonStyle = styled(ButtonStyle)<Partial<TabButtonInterface>>`
  flex-shrink: 0;

  border-bottom: 2px solid
    ${({ isActive, theme, color }) => (isActive ? getColor(theme.colors[color], 'base') : 'transparent')};

  &:focus,
  :active,
  :hover {
    box-shadow: none;
    text-decoration: none;
  }
`;

TabButtonStyle.defaultProps = {
  borderRadius: 'straight',
  borderWidth: 'none',
};
