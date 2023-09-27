import { Theme } from '../../themes';
import { DefaultInputInterface } from '../Input/interface';

export interface CheckboxInterface extends DefaultInputInterface {
  label?: React.ReactNode;
}

export type CheckboxStyleProps = {
  theme: Theme;
} & CheckboxInterface;
