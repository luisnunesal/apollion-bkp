import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';

import { TooltipProps } from './interface';
import { Arrow, TooltipContainer } from './style';

import { BaseText, TextInterface } from '../Typography';

const getElement = (node: React.ReactNode, props?: TextInterface) =>
  typeof node === 'string' ? <BaseText {...props}>{node}</BaseText> : node;

export const TooltipComponent = ({
  children,
  position,
  content,
  inverted,
  noArrow,
  onDismiss,
  ...props
}: TooltipProps) => {
  if (props.visible && typeof onDismiss === 'undefined') {
    throw new Error(`Você deve fornecer a função "onDismiss" quando utilizar a prop "visible"`);
  }

  const renderTooltip: TippyProps['render'] = (attrs) => (
    <TooltipContainer inverted={inverted} deep={2} p="xs" borderRadius="xs" {...attrs}>
      {getElement(content, {
        fontSize: 'micro',
        lineHeight: 'regular',
      })}
      {!noArrow && <Arrow data-popper-arrow="" />}
    </TooltipContainer>
  );

  return (
    <Tippy render={renderTooltip} placement={position} onClickOutside={onDismiss} {...props}>
      {getElement(children) as React.ReactElement}
    </Tippy>
  );
};

TooltipComponent.defaultProps = {
  position: 'top',
};
