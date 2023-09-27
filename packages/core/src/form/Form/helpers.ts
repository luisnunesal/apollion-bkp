import { FormikHelpers } from 'formik';
import * as Yup from 'yup';

import {
  FormFieldsType,
  FormInterface,
  InitialValuesTypesInterface,
  NewFieldType,
  ValidationSchemaType,
  Values,
} from './interface';

import { mapObjIndexed } from '../../utils';

export function normalizeValues(v: any) {
  return v.value || v;
}

/**
 * SOME FIELDS MIGHT RETURN DIFFERENT FROM INPUT COMPONENTS
 * THIS FUNCTION GUARANTEES THAT WHEN WE SUBMIT THIS FORM
 * IT WILL RECEIVE A KEY:VALUE OBJECT
 */
export function prepareSubmit<Fields extends FormFieldsType>(
  values: Values<Fields>,
  formikHelpers: FormikHelpers<Values<Fields>>,
  callback: FormInterface<Fields>['handleSubmit'],
) {
  const normalizedValues = mapObjIndexed<Values<Fields>, InitialValuesTypesInterface>(normalizeValues, values);
  callback(normalizedValues as Values<Fields>, formikHelpers);
}

export function getValidationSchema(fields: FormFieldsType): ValidationSchemaType {
  return Object.keys(fields).reduce((prev, fieldKey) => {
    const newValidation = fields[fieldKey].validation || Yup.string();

    return {
      ...prev,
      [fieldKey]: newValidation,
    };
  }, {});
}

export const newField: NewFieldType = (field) => field;
