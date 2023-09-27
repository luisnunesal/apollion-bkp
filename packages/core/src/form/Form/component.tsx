import React, { ElementType, forwardRef, Ref, useEffect, useImperativeHandle, useState } from 'react';
import deepEqual from 'fast-deep-equal';
import { FormikProps, useFormik } from 'formik';
import * as Yup from 'yup';

import { getValidationSchema, prepareSubmit } from './helpers';
import { FormFieldsType, FormInterface, FormRef } from './interface';
import { FormFlexStyle, FormGridStyle } from './style';

import { Button } from '../../elements/Button';
import { isObjectEmpty } from '../../utils';
import { Field } from '../Field';

const FormInputComponent = <Fields extends FormFieldsType>(props: FormInterface<Fields>, ref: Ref<FormRef>) => {
  const {
    initialValues,
    children,
    submitLabel,
    fields,
    handleSubmit,
    conditionalFields,
    validateOnChange,
    validateOnBlur,
    medias,
    onError,
    ...flex
  } = props;

  const validationSchema = getValidationSchema(fields);

  /**
   * EXECUTE FORMIK FUNCTIONS TO RETURN BINDS AND CALLBACKS
   */
  const formik = useFormik({
    initialValues: { ...initialValues },
    validateOnBlur: validateOnBlur || false,
    validateOnChange: validateOnChange || false,
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values, formikHelpers) => prepareSubmit(values, formikHelpers, handleSubmit),
  });

  useImperativeHandle(ref, () => formik);

  const [errors, updateErrors] = useState(() => formik.errors);

  useEffect(() => {
    if (onError && !deepEqual(errors, formik.errors)) {
      if (!isObjectEmpty(formik.errors)) {
        onError(formik.errors);
      }

      updateErrors(formik.errors);
    }
  }, [errors, formik.errors, onError]);

  const FormContainer: ElementType = medias ? FormGridStyle : FormFlexStyle;

  const renderChildren = () => {
    if (typeof children === 'undefined') {
      return (
        <Button
          disabled={formik.isSubmitting}
          type="submit"
          text={submitLabel || 'Enviar'}
          color="primary"
          area="button"
        />
      );
    }

    return typeof children === 'function'
      ? (children as (v: typeof formik.values) => React.ReactNode)(formik.values)
      : children;
  };

  return (
    <FormContainer medias={medias} {...flex} onSubmit={formik.handleSubmit}>
      {Object.keys(fields).map((fieldKey) => {
        const fieldComponent = (
          <Field
            {...fields[fieldKey]}
            key={fieldKey}
            name={fieldKey}
            area={fieldKey}
            value={formik.values[fieldKey]}
            errors={formik.errors[fieldKey]}
            setFieldValue={formik.setFieldValue}
          />
        );

        const conditionalField = conditionalFields && conditionalFields[fieldKey];

        if (conditionalField) {
          return conditionalField(formik.values) ? fieldComponent : null;
        }

        return fieldComponent;
      })}

      {renderChildren()}
    </FormContainer>
  );
};

export const FormComponent = forwardRef(FormInputComponent) as <Fields extends FormFieldsType>(
  props: FormInterface<Fields> & { ref?: Ref<FormRef> },
) => React.ReactElement;
