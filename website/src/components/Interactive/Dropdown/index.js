/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, react/jsx-filename-extension */

import React from 'react';
import './dropdown.css';

const Dropdown = props => {
  const { values, selectedValue, onClick } = props;

  let label = selectedValue;
  if (React.isValidElement(selectedValue) && Array.isArray(values)) {
    const item = values.find(
      v => v.value.props.mdxType === selectedValue.props.mdxType
    );
    label = item.label;
  }

  return (
    <div className="dropdown dropdown--hoverable">
      <button
        className="button button--outline button--primary"
        data-toggle="dropdown"
        type="submit"
      >
        {label}
        <i className="fas fa-caret-down" />
      </button>
      <ul className="dropdown__menu">
        {values.map(v => {
          const value = v.value || v;
          const label = v.label || v;

          return (
            <li key={label} onClick={() => onClick(value)}>
              <span className="dropdown__link">{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Dropdown;
