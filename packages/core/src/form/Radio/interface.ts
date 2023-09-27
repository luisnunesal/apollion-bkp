import { Theme } from '../../themes';
import { DefaultInputInterface } from '../Input/interface';

export interface RadioInterface extends DefaultInputInterface {
  label?: string;
}

export type RadioStyleProps = {
  theme: Theme;
} & RadioInterface;
