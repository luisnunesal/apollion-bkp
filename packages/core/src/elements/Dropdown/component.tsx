import React, { useEffect, useState } from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';

import { DropdownPosition, DropdownProps, RenderProps } from './interface';

import { Paper } from '../../containers/Paper';
import { useToggle } from '../../hooks';
import { isFunction } from '../../utils';
import { List } from '../List';

const dropdownPosition: Record<DropdownPosition, TippyProps['placement']> = {
  left: 'bottom-start',
  right: 'bottom-end',
  center: 'bottom',
};

export const DropdownComponent = ({ children, options, content, hoverable, position, width, full }: DropdownProps) => {
  if (!options && !content) {
    throw new Error('Dropdown deve receber "content" ou "options" props');
  }

  const [triggerNode, getTriggerNode] = useState<HTMLElement>();
  const [triggerWidth, setTriggerWidth] = useState<number | undefined>();

  const { active: visible, enable: openDropdown, disable: closeDropdown, toggle } = useToggle(false);

  useEffect(() => {
    if (full && triggerNode) {
      const rect = triggerNode.getBoundingClientRect();
      setTriggerWidth(rect.width);
    }
  }, [triggerNode]);

  const renderChildren = () => {
    const itIsFunction = isFunction(children);

    const element = isFunction(children)
      ? (children as RenderProps)({ isOpen: visible, open: openDropdown, toggle })
      : children;

    const childrenProps = {
      ref: getTriggerNode,
      ...(!itIsFunction && {
        onClick: toggle,
      }),
    };

    return React.cloneElement(element as React.ReactElement, childrenProps);
  };

  const renderDropdown: TippyProps['render'] = (attrs) => {
    let contentElement = content;

    if (Array.isArray(options)) {
      contentElement = <List gap="zero" color="primary.action" content={options} />;
    }

    if (isFunction(content)) {
      contentElement = content({ close: closeDropdown });
    }

    return (
      <Paper p="xs" borderRadius="xs" deep={2} width={width ?? triggerWidth} {...attrs}>
        {contentElement}
      </Paper>
    );
  };

  const customProps: Partial<TippyProps> = {
    ...(!hoverable && {
      onClickOutside: closeDropdown,
      visible,
    }),
  };

  return (
    <>
      {renderChildren()}
      <Tippy
        {...customProps}
        interactive
        render={renderDropdown}
        reference={triggerNode}
        placement={dropdownPosition[position]}
      />
    </>
  );
};

DropdownComponent.defaultProps = {
  position: 'left',
  hoverable: false,
};
