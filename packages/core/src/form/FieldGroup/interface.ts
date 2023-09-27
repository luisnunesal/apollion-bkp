import { XOR } from '../../utils/typeUtils';
import { CheckboxInterface } from '../Checkbox/interface';

type Gap = number | string;

interface CheckboxGroupCommonInterface extends Omit<CheckboxInterface, 'value'> {
  value: string | string[];
  type: 'radio' | 'checkbox';

  gap?: Gap | { row?: Gap; column?: Gap };
  columns?: number;
}

interface GroupInputs {
  inputs: Array<{ label: string } & React.ComponentPropsWithoutRef<'input'>>;
}

export type FieldGroupInterface = CheckboxGroupCommonInterface & XOR<GroupInputs, { children: React.ReactNode }>;
