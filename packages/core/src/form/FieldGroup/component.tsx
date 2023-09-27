import React, { Children, useCallback, useMemo } from 'react';

import { getGridColumns, getGridGap } from './helpers';
import { FieldGroupInterface } from './interface';

import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';

export const FieldGroupComponent = (props: FieldGroupInterface) => {
  const { name, variant, gap, columns, value, inputs, children, onChange, type, ...rest } = props;

  const gridTemplateColumns = useMemo(() => getGridColumns(columns), [columns]);
  const [gridRowGap, gridColumnGap] = useMemo(() => getGridGap(gap), [gap]);

  const handleChange = useCallback(
    (isChecked: boolean, inputValue: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange || !name) {
        return;
      }

      let newValue = null;
      if (type === 'radio') {
        newValue = inputValue;
      } else if (isChecked && Array.isArray(value)) {
        newValue = value.filter((v) => v !== inputValue);
      } else {
        newValue = [...(value || []), inputValue];
      }

      onChange(newValue);
    },
    [name, value, onChange],
  );

  function isInputChecked(inputValue: any) {
    return Array.isArray(value) ? Boolean(value.includes(inputValue)) : inputValue === value;
  }

  function renderInputs() {
    const Component = type === 'radio' ? Radio : Checkbox;

    return inputs.map((input: any) => {
      const isChecked = isInputChecked(input.value);
      const componentName = type === 'radio' ? name : input.name;

      return (
        <Component
          {...input}
          key={input.value}
          variant={variant}
          name={componentName}
          checked={isChecked}
          onChange={handleChange(isChecked, input.value)}
        />
      );
    });
  }

  function renderChildren() {
    return Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      // @ts-ignore
      const childValue = child.props.value;
      const isChecked = isInputChecked(value);

      return React.cloneElement(child, {
        // @ts-ignore
        onChange: handleChange(isChecked, childValue),
        checked: isChecked,
      });
    });
  }

  return (
    <div
      style={{
        display: 'grid',
        gridRowGap,
        gridColumnGap,
        gridTemplateColumns,
      }}
    >
      {inputs ? renderInputs() : renderChildren()}
    </div>
  );
};

FieldGroupComponent.defaultProps = {
  gap: 'Compact',
};
