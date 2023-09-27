import styled from 'styled-components';

import { SideBarLayoutMedias } from './props';

import { Grid } from '../../containers/Grid';

export const StyledGrid = styled(Grid).attrs({ medias: SideBarLayoutMedias })`
  height: 100%;
`;
