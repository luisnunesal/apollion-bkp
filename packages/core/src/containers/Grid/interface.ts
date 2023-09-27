import { ReactNode } from 'react';
import { ThemeProps } from 'styled-components';

import { BreakpointTypes } from '../../themes/Breakpoints/interface';
import { SpacingInterface } from '../../themes/Spacing/interface';
import { Theme } from '../../themes/ThemeProvider/interface';
import { BaseContainerProps } from '../Base';

/**
 * Grid viewport types
 * All media queries settings should use only these types
 */
export type GridMediasTypes = BreakpointTypes;

export type GridSpacingTypes = SpacingInterface;

/**
 * Each viewport can only use these Props
 */
export type GridMediaInterface = {
  breakpoint?: string;
  columns?: string;
  rows?: string;
  areas?: string;
  columnGap?: GridSpacingTypes;
  rowGap?: GridSpacingTypes;
  gap?: GridSpacingTypes;
};

/**
 * Apply props to viewport settings
 */
export type GridBreakpoints = Partial<Record<GridMediasTypes, GridMediaInterface>> & GridMediaInterface;

export interface GridPropsInterface extends BaseContainerProps {
  medias?: GridBreakpoints;
  children?: ReactNode;
}

/**
 * Grid Element Interface
 */
export interface DefaultGridInterface
  extends GridPropsInterface,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {}

export interface GridStyleProps extends DefaultGridInterface, ThemeProps<Theme> {}
