import React from 'react';

type ContextProps = {
  ellipsis: boolean;
  getSelected: (index: number, checked: boolean) => void;
  getAllSelected: (checked: boolean) => void;
  columnSum: {
    index: number | undefined;
    sum: number | undefined;
  };
};

export const TableContext = React.createContext<ContextProps | undefined>(undefined);
