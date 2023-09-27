import React, { ComponentProps } from 'react';
import { FormikHelpers } from 'formik';

import { DefaultFlexInterface } from '../../containers/Flex';
import { Theme } from '../../themes/ThemeProvider';

export type FieldVariants = 'default' | 'success' | 'error';

interface FormikBaseInterface {
  errors?: any; // this one regards from formik
  setFieldValue?: FormikHelpers<any>['setFieldValue'];
}

export interface FieldInterface<T extends React.ElementType = any> extends FormikBaseInterface {
  component: T;
  name?: string;
  value?: any;
  label?: string;
  hideLabel?: boolean;
  area?: string;
  error?: boolean;
  success?: boolean;
  variant?: FieldVariants;
  fieldProps?: DefaultFlexInterface;
  inputProps?: ComponentProps<T>;
  optionalText?: string;
  hintText?: string;
  hintSuccessText?: string;
  hintErrorText?: string;
  readOnly?: boolean;
  readOnlyText?: string;
}

export interface FieldStyleProps {
  variant: FieldVariants;
  disabled: boolean;
  theme: Theme;
}
