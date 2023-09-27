import React from 'react';
import { Box as BoxIcon, Code as CodeIcon } from 'react-feather';
import { Code } from '../Code';
import TogglerTabs from './TogglerTabs';

const toggles = [
  {
    name: 'Example',
    tooltipText: 'Show example',
    icon: <BoxIcon />,
    active: true,
  },
  { name: 'Code', tooltipText: 'Show source code', icon: <CodeIcon /> },
];

export const ExampleCustomizer = ({ code: _code, example, schema }) => (
  <TogglerTabs togglerItems={toggles}>
    {({ toggle: { name } }) => {
      switch (name) {
        case 'Example':
          return example;
        case 'Code':
          return <Code>{_code}</Code>;
        default:
          return <p>Nothing selected</p>;
      }
    }}
  </TogglerTabs>
);
