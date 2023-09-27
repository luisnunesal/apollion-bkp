import { InputInterface } from '../Input';

export interface InputMaskInterface extends Omit<InputInterface, 'onChange'> {
  mask: string;
  onChange?: (value: string) => void;
}
