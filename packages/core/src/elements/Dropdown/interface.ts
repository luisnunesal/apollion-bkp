import { ListContentType } from '../List/interface';

interface ContentRenderProps {
  close: () => void;
}

interface TriggerArguments {
  isOpen: boolean;
  open?: () => void;
  toggle: () => void;
}

export type RenderProps = (args: TriggerArguments) => React.ReactNode;

export type DropdownPosition = 'left' | 'center' | 'right';

export interface DropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  content?: React.ReactNode | ContentRenderProps;
  children: React.ReactNode | RenderProps;
  options?: ListContentType[];
  hoverable?: boolean;
  /**
   * if the dropdown should have the same width of trigger element
   */
  full?: boolean;
  /**
   * width of the dropdown container if defined `full` prop will have no effect
   */
  width?: number | string;

  position?: DropdownPosition;

  hideArrow?: boolean;

  distance?: number;
}
