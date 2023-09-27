import { SpacingInterface } from '../../themes/Spacing';
import { WithTheme } from '../../themes/ThemeProvider/interface';

export type Flex = 'fluid' | 'initial' | 'auto' | 'none';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlignItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexWrap = 'wrap' | 'reverse' | 'nowrap';
export type FlexOrder = number | 'first' | 'last';

export type AlignSelf = 'start' | 'end' | 'center' | 'auto' | 'stretch';

// Not related to grid items but is here anyway...
export type JustifySelf = AlignSelf;

export type FlexFactoryProps = Partial<{
  flex: Flex;
  gap?: SpacingInterface;
  flexDirection: FlexDirection;
  flexBasis: string | number;
  justifyContent: FlexJustify;
  alignItems: FlexAlignItems;
  wrap: FlexWrap;
  alignSelf: AlignSelf;

  grow: boolean;
  shrink: boolean;
  order: FlexOrder;

  justifySelf: JustifySelf;
}>;

export type FlexThemeProps = WithTheme<FlexFactoryProps>;
