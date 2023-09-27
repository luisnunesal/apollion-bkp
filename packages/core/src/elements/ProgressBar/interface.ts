import { ButtonInterface } from '../Button/interface';

export interface ProgressBarInterface extends React.ComponentPropsWithoutRef<'div'> {
  color?: ButtonInterface['color'];
  size?: ButtonInterface['size'];
  border?: boolean;
  showProgressLabel?: boolean;
  progress: number;
}
