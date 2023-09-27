import { Props as ReactSelectProps } from 'react-select';

import { FieldVariants } from '../Field';
import { InputInterface } from '../Input';

export type OptionType<T = string> = {
  value: T;
  label: string;
};

export type ValueType<Option> = Option | Option[];

export interface InputSelectProps<T> extends Omit<ReactSelectProps, 'onChange' | 'value' | 'options'> {
  name?: string;
  size?: InputInterface['size'];
  width?: number | string;
  variant?: FieldVariants;
  value?: ValueType<OptionType<T>>;
  loadingPlaceholder?: string;
  emptyMessage?: string;
  style?: React.CSSProperties;
  options?: OptionType<T>[];
  onChange?: (value: OptionType<T>[]) => void;
  loadOptions?: (inputValue: string) => Promise<OptionType<T>[]>;
  menuPlacement?: 'auto' | 'bottom' | 'top';
  readOnly?: boolean;
}

export type InputSelectRef = {
  setValue: (value: ValueType<OptionType<any>>) => void;
};
