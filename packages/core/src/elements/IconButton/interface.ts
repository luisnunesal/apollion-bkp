import React from 'react';

import { ButtonInterface } from '../Button/interface';

export interface IconButtonInterface extends Omit<ButtonInterface, 'fullWidth'> {
  loadingComponent?: React.ReactNode;
}
