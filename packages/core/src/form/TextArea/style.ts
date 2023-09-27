import { TextAreaStyleProps } from './interface';

import { Flex } from '../../containers/Flex';
import { BackgroundFactory, BorderFactory, FontFactory, SpacingFactory, styled } from '../../factory';
import { inputDisabledStyle, inputPlaceholderStyle, inputVariantStyle } from '../Input';

export const TextAreaStyle = styled('textarea')<TextAreaStyleProps>`
  -webkit-appearance: none;
  width: 100%;
  outline: none;
  display: block;
  transition: ${({ theme }) => theme.animation.transitions.short};

  ${inputVariantStyle}

  ${inputDisabledStyle}

  ${inputPlaceholderStyle}

  ${FontFactory}
  ${BorderFactory({
    borderRadius: 'xs',
    borderWidth: 'thin',
    borderStyle: 'solid',
  })}
  ${SpacingFactory({ p: 'small' })}
  ${BackgroundFactory({ bgColor: 'grayscale.0' })}
`;

export const TextAreaCounterStyle = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
  line-height: 1.2rem;
  font-size: 0.6875rem;
  transform: translateY(100%);
  color: ${({ theme }) => theme.colors.neutral['170']};
`;
