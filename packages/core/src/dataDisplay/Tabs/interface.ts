import { BaseContainerProps } from '../../containers/Base';
import { DefaultFlexInterface } from '../../containers/Flex';
import { ButtonInterface } from '../../elements/Button';

export interface TabButtonInterface {
  tabTitle: React.ReactNode;

  isActive?: boolean;

  buttonProps?: ButtonInterface;
  variant?: ButtonInterface['variant'];
  color?: ButtonInterface['color'];

  children?: React.ReactNode;
}

export type TabType = Omit<TabButtonInterface, 'isActive'> & {
  id?: string;
  content: React.ReactNode;
  handleClick?: (index?: number, e?: React.MouseEvent<Element, MouseEvent>) => void;
  color?: ButtonInterface['color'];
};

export interface TabsInterface extends BaseContainerProps {
  selectedIndex: number;
  onChange: (index: number) => void;

  tabs: TabType[];
  tabHeaderProps?: DefaultFlexInterface;
  tabContentProps?: DefaultFlexInterface;
}
