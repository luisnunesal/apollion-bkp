import { FieldVariants } from '../Field/interface';
import { InputSize, InputTokenProps } from '../Input/interface';

export interface TextAreaInterface extends React.ComponentPropsWithoutRef<'textarea'> {
  size?: InputSize;
  value?: string;
  resize?: boolean;
  maxLength?: number;
  maxLengthHint?: string;
  variant?: FieldVariants;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type TextAreaStyleProps = TextAreaInterface & InputTokenProps;
