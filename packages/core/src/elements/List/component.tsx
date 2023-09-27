import React, { forwardRef, useState } from 'react';
import { nanoid } from 'nanoid';

import { ListContentType, ListInterface, ListItemInterface } from './interface';
import { ListItemStyle, ListStyle } from './style';

import { Icon } from '../Icon';
import { Link } from '../Link';
import { Text } from '../Typography';

const ListItem = ({ item, showCheckIcon, action }: ListItemInterface) => {
  if (!item.title) {
    throw new Error('You need to pass a title to you object inside the list');
  }

  const showIcon = showCheckIcon && item.isSelected && !item.to;
  const onClickItem = () => !item.to && action();

  const listItem = (
    <ListItemStyle
      as="li"
      gap="xs"
      width="100%"
      flexDirection="row"
      alignItems="center"
      borderRadius="micro"
      isSelected={item.isSelected}
      onClick={onClickItem}
    >
      {item.icon ?? (showIcon && <Icon name="check" color="main" />)}
      <Text whiteSpace="nowrap">{item.title}</Text>
    </ListItemStyle>
  );

  if (item.to) {
    return <Link to={item.to}>{listItem}</Link>;
  }

  return listItem;
};

export const List = forwardRef<HTMLUListElement, ListInterface>(
  ({ content, multiple, showCheckIcon, onSelectItems, onItemClick, ...props }, ref) => {
    const [items, updateItems] = useState(() => content.map((item) => ({ id: nanoid(5), isSelected: false, ...item })));

    const toggleItem = (itemProps: ListContentType) => () => {
      const itemId = itemProps.id;
      const isSelected = !itemProps.isSelected;

      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return { ...item, isSelected };
        }

        return {
          ...item,
          isSelected: multiple ? item.isSelected : false,
        };
      });

      updateItems(updatedItems);

      onSelectItems?.(updatedItems);

      onItemClick?.(itemProps);

      if (itemProps.action) {
        const { action, icon, ...rest } = itemProps;

        itemProps.action?.(rest);
      }
    };

    return (
      <ListStyle as="ul" gap="micro" {...props} ref={ref}>
        {items.map((item) => (
          <ListItem item={item} key={item.id} showCheckIcon={showCheckIcon} action={toggleItem(item)} />
        ))}
      </ListStyle>
    );
  },
);
