import React, { forwardRef } from 'react';

import { InputComponent } from '../Input/component';
import { InputInterface } from '../Input/interface';

export const InputDate = forwardRef<HTMLInputElement, InputInterface>((props, ref) => (
  <InputComponent type="date" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" ref={ref} {...props} />
));
