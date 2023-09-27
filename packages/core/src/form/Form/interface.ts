import { FormikErrors, FormikHelpers, FormikProps, FormikSharedConfig } from 'formik';
import * as Yup from 'yup';

import { FlexPropsInterface, GridBreakpoints, GridPropsInterface } from '../../containers';
import { XOR } from '../../utils/typeUtils';
import { FieldInterface } from '../Field';
import { OptionType } from '../InputSelect';

export type ValidationTypes = any | (() => any);

export type ValidationSchemaType = Record<string, ValidationTypes>;

export type InitialValuesTypesInterface = string | boolean | number | OptionType<any> | Array<any>;

export type FieldInterfaceWithValidationType<T extends React.ElementType<any> = any> = FieldInterface<T> & {
  validation?: ValidationTypes;
};

const a = Yup.string().required();

export type FormFieldsType = Record<string, FieldInterfaceWithValidationType>;

export type NewFieldType = <T extends React.ElementType<any>>(
  field: FieldInterfaceWithValidationType<T>,
) => FieldInterface<T>;

export type Values<T> = {
  [key in keyof T]?: InitialValuesTypesInterface;
};
// ----- //

type NativeFormProps = Omit<React.ComponentPropsWithoutRef<'form'>, 'onError'>;

export type FormRef = FormikProps<any>;

export interface FormCommonInterface<Fields extends FormFieldsType> extends NativeFormProps {
  fields: Fields;
  handleSubmit: (values?: Values<Fields>, formikHelpers?: FormikHelpers<Values<Fields>>) => void;

  initialValues?: Values<Fields>;
  children?: React.ReactNode | ((values: Values<Fields>) => React.ReactNode);
  submitLabel?: string;

  validateOnChange?: FormikSharedConfig['validateOnChange'];
  validateOnBlur?: FormikSharedConfig['validateOnBlur'];

  onError?: (errors: FormikErrors<Values<Fields>>) => void;

  conditionalFields?: {
    [key in keyof Fields]?: (v: Partial<Values<Fields>>) => boolean;
  };
}

export interface FormGrid extends GridPropsInterface {
  medias?: GridBreakpoints;
}

export interface FormFlex extends FlexPropsInterface {
  medias?: never;
}

export type FormInterface<F extends FormFieldsType> = FormCommonInterface<F> & XOR<FormFlex, FormGrid>;
