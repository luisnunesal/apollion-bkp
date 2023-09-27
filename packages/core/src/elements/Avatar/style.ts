import styled from 'styled-components';

import { AvatarProps } from './interface';

import { Flex } from '../../containers/Flex';
import { WithTheme } from '../../themes/ThemeProvider/interface';

function getSizes({ theme, size, label }: WithTheme<AvatarProps>) {
  const { fontSize } = theme.font;
  const labelLength = label?.length || 0;

  switch (size) {
    case 'small': {
      const length = theme.spacing('medium');
      return {
        width: length,
        height: length,
        fontSize: fontSize.micro,
      };
    }
    case 'large': {
      const length = theme.spacing('xl');
      return {
        width: length,
        height: length,
        fontSize: labelLength === 1 ? fontSize.xxl : fontSize.large,
      };
    }
    case 'extraLarge': {
      const length = theme.spacing('xxl');
      return {
        width: length,
        height: length,
        fontSize: labelLength === 1 ? fontSize.gargantua : fontSize.giant,
      };
    }
    case 'giant': {
      const length = theme.spacing('giant');
      return {
        width: length,
        height: length,
        fontSize: fontSize.gargantua,
      };
    }
    default: {
      const length = theme.spacing('large');
      return {
        width: length,
        height: length,
        fontSize: labelLength === 1 ? fontSize.medium : fontSize.xs,
      };
    }
  }
}

export const AvatarContainer = styled(Flex)<AvatarProps>(getSizes);
