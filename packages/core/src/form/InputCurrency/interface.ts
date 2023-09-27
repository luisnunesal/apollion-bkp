import { InputInterface } from '../Input';

export interface InputCurrencyInterface extends Omit<InputInterface, 'onChange' | 'value'> {
  onChange?: (value: string) => void;
  value?: string | number;
  decimal?: string;
  thousand?: string;
  prefix?: string;
}
