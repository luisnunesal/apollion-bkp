import { ColorsType } from '../../themes/Colors';

export interface DefaultSvgInterface extends Omit<React.ComponentPropsWithoutRef<'svg'>, 'width' | 'height'> {
  error?: string | Record<string, unknown>;
  paths?: any;
  disabled?: boolean;
  fillAll?: string;
  className?: string;
  size?: string | number;
  title?: string;
  dimensions?: {
    width: string | number;
    height?: string | number;
    ratio?: number;
  };
}

export interface PathInterface extends React.ComponentPropsWithoutRef<'path'> {
  fill?: ColorsType;
  d: string;
}
