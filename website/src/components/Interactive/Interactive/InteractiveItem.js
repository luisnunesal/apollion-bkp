import React from 'react';
import Pill from '../Pill';
import Dropdown from '../Dropdown';
import Switch from '../Switch';
import Input from '../Input';

export const InteractiveItem = props => {
  switch (props.type) {
    case 'text':
      return (
        <Input
          value={props.value}
          onChange={e => {
            props.handleChange({
              position: props.position,
              payload: {
                [props.field]: e.target.value
              }
            });
          }}
        />
      );
    case 'boolean':
      return (
        <Switch
          checked={props.value}
          onChange={() => {
            props.handleChange({
              position: props.position,
              payload: {
                [props.field]: !props.value
              }
            });
          }}
        />
      );
    case 'array-select':
      return (
        <Dropdown
          position={props.position}
          onClick={newValue => {
            props.handleChange({
              position: props.position,
              payload: {
                [props.field]: newValue
              }
            });
          }}
          values={props.values}
          selectedValue={props.value}
        />
      );
    case 'array-checkbox':
      return (
        <Pill
          onClick={newValue => {
            props.handleChange({
              position: props.position,
              payload: {
                [props.field]: newValue
              }
            });
          }}
          values={props.values}
          selectedValue={props.value}
        />
      );
    default:
      throw new Error(
        'Wrong typo, should be text, boolean, array-select ou array-checkbox'
      );
  }
};
