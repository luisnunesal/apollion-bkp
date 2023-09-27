import styled from 'styled-components';

import { BaseContainerProps } from '../../../containers/Base';
import { Flex } from '../../../containers/Flex';

export const TableEmptyStyle = styled(Flex).attrs<BaseContainerProps>((props) => ({
  bgColor: 'neutral.5',
  ...props,
}))``;
