import { BaseContainerProps } from '../../containers/Base';
import { icons } from '../../icons';
import { SpacingInterface } from '../../themes/Spacing';
import { DefaultSvgInterface } from '../Svg';

export interface IconStyleInterface extends BaseContainerProps {
  color?: string;
  size?: SpacingInterface;
}

export interface IconProps extends React.ComponentPropsWithoutRef<'div'>, IconStyleInterface {
  title?: string;
  icon?: React.ReactNode;
  iconProps?: Partial<DefaultSvgInterface>;
  src?: string;
  name?: keyof typeof icons;
}

export interface IconVariantProps extends IconProps {
  svgProps: Partial<DefaultSvgInterface>;
}
