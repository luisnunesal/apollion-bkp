import React from 'react';
import {
  Tooltip as TooltipComponent,
  Button,
  useToggle,
  Icon,
} from '@captalys-platform/core';

import BrowserOnly from '@docusaurus/BrowserOnly';

export const Tooltip = ({ children, ...props }: any) => {
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
      {() => <TooltipComponent {...props}>{children}</TooltipComponent>}
    </BrowserOnly>
  );
};

export const TooltipControlled = () => {
  const { active, disable, toggle } = useToggle(true);

  return (
    <Tooltip
      visible={active}
      onDismiss={disable}
      position="right"
      content="Estou sempre visivel"
    >
      <Button
        onClick={toggle}
        size="small"
        text="Prosseguir"
        icon={<Icon name="arrowRight" />}
        iconPosition="right"
      />
    </Tooltip>
  );
};
