import { CSSObject } from 'styled-components';

import { ResponsiveProps } from './interface';

import { BreakpointTypes } from '../../themes/Breakpoints/interface';
import { Theme, WithTheme } from '../../themes/ThemeProvider/interface';
import { memoize } from '../../utils';
import { BackgroundFactory } from '../BackgroundFactory';
import { ColorFactory } from '../ColorFactory';
import { ContainerFactory } from '../ContainerFactory';
import { DeepFactory } from '../DeepFactory';
import { FlexFactory } from '../FlexFactory';
import { FontFactory } from '../FontFactory';
import { SizeFactory } from '../SizeFactory';
import { SpacingFactory } from '../SpacingFactory';

const isResponsive = memoize(
  (prop: string): boolean =>
    prop.startsWith('sm_') || prop.startsWith('md_') || prop.startsWith('lg_') || prop.startsWith('xl_'),
);

const getStyles = (props: Record<string, any>, theme: Theme) => {
  const withTheme = { theme };
  return {
    ...SizeFactory(props)(),
    ...ContainerFactory(props)(withTheme),
    ...BackgroundFactory(props)(withTheme),
    ...SpacingFactory(props)(withTheme),
    ...ColorFactory(props)(withTheme),
    ...FlexFactory(props)(withTheme),
    ...FontFactory(props)(withTheme),
    ...DeepFactory(props)(withTheme),
  };
};

const responsiveBreakpoints: Array<BreakpointTypes> = ['sm', 'md', 'lg', 'xl'];

export const ResponsiveFactory =
  (customProps: ResponsiveProps) =>
  (context: WithTheme<ResponsiveProps>): CSSObject => {
    const { theme, ...props } = { ...customProps, ...context };

    const mediaProps: Record<string, Record<string, any>> = {};

    Object.keys(props).forEach((prop) => {
      if (isResponsive(prop)) {
        const [breakpoint, propertie] = prop.split('_');
        const propValue = props[prop as keyof ResponsiveProps];

        if (breakpoint in mediaProps) {
          mediaProps[breakpoint] = {
            ...mediaProps[breakpoint],
            [propertie]: propValue,
          };
        } else {
          mediaProps[breakpoint] = {
            [propertie]: propValue,
          };
        }
      }
    });

    const styles: CSSObject = {};

    responsiveBreakpoints.forEach((breakpoint) => {
      if (breakpoint in mediaProps) {
        styles[theme.breakpoints.up(breakpoint)] = getStyles(mediaProps[breakpoint], theme);
      }
    });

    return styles;
  };
