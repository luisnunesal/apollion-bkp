import styled from 'styled-components';

import { Flex, FlexPropsInterface } from '../Flex';

export const PaperStyle = styled(Flex).attrs<unknown, FlexPropsInterface>((props) => ({
  p: 'medium',
  borderRadius: 'micro',
  bgColor: 'neutral.0',
  deep: 2,
  ...props,
}))``;
