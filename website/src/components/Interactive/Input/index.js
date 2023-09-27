import React from "react";
import "./input.css"

const Input = (props) => {
  const { value, onChange } = props
  return <input key="10" className="input" type="text" onChange={onChange} value={value} />
}

export default Input;