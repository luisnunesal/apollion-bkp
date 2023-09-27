import { BaseContainerProps } from '../../containers/Base';
import { FlexPropsInterface } from '../../containers/Flex';

export type ItemContent = {
  id?: string;
  to?: string;
  title: React.ReactNode;
  isSelected?: boolean;
};

export interface ListContentType extends ItemContent {
  action?: (item: ItemContent) => void;
  icon?: React.ReactNode;
}

export interface ListInterface extends FlexPropsInterface, Omit<React.ComponentPropsWithoutRef<'ul'>, 'children'> {
  content: ListContentType[];
  multiple?: boolean;
  showCheckIcon?: boolean;
  onSelectItems?: (l: ListContentType[]) => void;
  onItemClick?: (l: ListContentType) => void;
}

export interface ListItemInterface extends BaseContainerProps, React.ComponentPropsWithoutRef<'li'> {
  item: ListContentType;
  action?: () => void;
  showCheckIcon?: boolean;
}

export type LisItemStyle = {
  isSelected?: boolean;
};
