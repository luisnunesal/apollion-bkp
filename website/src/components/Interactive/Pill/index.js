import React from "react";
import classnames from 'classnames';
import "./pill.css";

const Pill = props => {
  const { values, selectedValue, onClick } = props;
  return (
    <ul className="pills">
      {values.map(value => (
        <li
          onClick={() => onClick(value)}
          key={value}
          value={value}
          className={classnames("pill-item", {
            "pill-item--active": selectedValue === value
          })}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Pill;
