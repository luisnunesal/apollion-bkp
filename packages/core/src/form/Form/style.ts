import styled from 'styled-components';

import { Flex } from '../../containers/Flex';
import { Grid } from '../../containers/Grid';

export const FormFlexStyle = styled(Flex).attrs({
  as: 'form',
  width: '100%',
})``;

export const FormGridStyle = styled(Grid).attrs({
  as: 'form',
  width: '100%',
})``;
