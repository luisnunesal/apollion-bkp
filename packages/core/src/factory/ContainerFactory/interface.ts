import { WithTheme } from '../../themes/ThemeProvider/interface';

export type OverflowType = 'visible' | 'hidden' | 'scroll' | 'auto';

export type CursorType =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | 'grab'
  | 'grabbing';

export type DisplayType =
  | 'none'
  | 'inline'
  | 'block'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid';

export type ContainerFactoryProps = Partial<{
  area: string;
  padding: string | number;
  margin: string | number;
  isHidden: boolean;
  truncate: boolean;
  container: boolean;
  overflow: OverflowType;
  overflowX: OverflowType;
  overflowY: OverflowType;
  absoluteFill: boolean;
  position: 'relative' | 'absolute' | 'fixed' | 'sticky';
  display: DisplayType;
  cursor: CursorType;
  top: string | number;
  bottom: string | number;
  left: string | number;
  right: string | number;
  zIndex: number;
}>;

export type ContainerThemePropsType = WithTheme<ContainerFactoryProps>;
