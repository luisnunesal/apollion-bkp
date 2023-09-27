import React from 'react';

import { getIconSize } from './helpers';
import { AvatarProps } from './interface';
import { AvatarContainer } from './style';

import { Icon } from '../Icon';
import { Image } from '../Image';
import { Typography } from '../Typography';

function getContent({ imgSrc, icon, size, label }: Partial<AvatarProps>) {
  if (imgSrc) {
    return <Image width="100%" height="100%" src={imgSrc} data-testid="avatar-image" />;
  }

  if (icon) {
    return <Icon name={icon} size={getIconSize(size)} data-testid="avatar-icon" />;
  }

  return <Typography textTransform="uppercase">{label}</Typography>;
}

export const Avatar: React.FC<AvatarProps> = ({ size, icon, imgSrc, label, ...props }) => (
  <AvatarContainer
    alignItems="center"
    justifyContent="center"
    overflow="hidden"
    borderRadius="circular"
    bgColor="grayscale.5"
    color="primary.base"
    label={label}
    size={size}
    {...props}
  >
    {getContent({ size, icon, imgSrc, label })}
  </AvatarContainer>
);
