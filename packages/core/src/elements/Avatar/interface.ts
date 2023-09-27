import { DefaultFlexInterface } from '../../containers/Flex/interface';
import { IconProps } from '../Icon/interface';

export type AvataSizeType = 'small' | 'medium' | 'large' | 'extraLarge' | 'giant';

export interface AvatarProps extends DefaultFlexInterface {
  size?: AvataSizeType;
  imgSrc?: string;
  icon?: IconProps['name'];
  label?: string;
}
