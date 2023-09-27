import { TippyProps } from '@tippyjs/react/headless';

import { WithTheme } from '../../themes/ThemeProvider/interface';

export interface TooltipProps {
  inverted?: boolean;
  noArrow?: boolean;
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TippyProps['placement'];
  interactive?: boolean;
  visible?: boolean;
  onDismiss?: () => void;
}

export type TooltipStyleProps = WithTheme<Partial<TooltipProps>>;
