import { AvatarProps } from './interface';

import { IconProps } from '../Icon';

export function getIconSize(avatarSize: AvatarProps['size']): IconProps['size'] {
  if (avatarSize === 'extraLarge') {
    return 'xl';
  }

  if (avatarSize === 'giant') {
    return 'xxl';
  }

  return avatarSize;
}
