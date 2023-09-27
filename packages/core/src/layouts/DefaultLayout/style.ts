import styled from 'styled-components';

import { DefaultLayoutMedias } from './props';

import { Grid } from '../../containers/Grid';

export const GridStyle = styled(Grid).attrs({ medias: DefaultLayoutMedias })`
  width: 100%;
  height: 100%;
`;
