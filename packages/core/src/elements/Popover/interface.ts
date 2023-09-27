import { TooltipProps } from '../Tooltip';

export interface PopoverProp extends Omit<TooltipProps, 'content'> {
  title?: string;
  icon?: React.ReactNode;
  description: string;
  inverted?: boolean;
}
