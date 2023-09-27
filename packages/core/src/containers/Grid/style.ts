import styled, { CSSObject } from 'styled-components';

import { DefaultGridInterface, GridMediaInterface, GridMediasTypes, GridStyleProps } from './interface';

import { Theme } from '../../themes/ThemeProvider/interface';
import { BaseContainer } from '../Base';

/**
 * Iterate over viewports and mount Media Queries
 * NOTE: We assume that Mobile Devices (xs) as default style.
 * So, do not forget to start your development for mobile first.
 * @param media - Get viewports from user. It could be all or just one
 * @param props - Props defined by user
 */
const getGridProps = (theme: Theme, props: GridMediaInterface): CSSObject => ({
  gridTemplateColumns: props.columns,
  gridTemplateRows: props.rows,
  gridTemplateAreas: props.areas,
  gap: props.gap ? theme.spacing(props.gap) : undefined,
  gridColumnGap: props.columnGap ? theme.spacing(props.columnGap) : undefined,
  gridRowGap: props.rowGap ? theme.spacing(props.rowGap) : undefined,
});

/**
 * Style for mobile (xs) does not need media query
 * It is considered default style
 * @param medias - Get 'media' attribute from element and mount Media queries
 */
export const setGridBreakpoints = ({ medias, theme }: GridStyleProps): CSSObject => {
  if (!medias) return {};

  if (!('xs' in medias)) {
    return getGridProps(theme, medias as GridMediaInterface);
  }

  return (Object.keys(medias) as GridMediasTypes[]).reduce(
    (query, media) => ({
      ...query,
      [theme.breakpoints.up(media)]: getGridProps(theme, medias[media]),
    }),
    {},
  );
};

export const DefaultGridStyle = styled(BaseContainer)<DefaultGridInterface>`
  display: grid;

  ${setGridBreakpoints}
`;
