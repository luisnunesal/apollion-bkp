import { SizeFactory } from './component';

import { createTheme } from '../../themes/ThemeProvider/props';

const customProps = {
  maxWidth: 10,
  height: 10,
  maxHeight: 10,
  minHeight: 10,
  minWidth: 10,
  width: 10,
};

describe('SizeFactory', () => {
  const token = SizeFactory(customProps);

  it('ContexttProps should overwrite customProps', () => {
    const result = token({ maxHeight: 343 });

    expect(result.maxHeight).toBe(343);
    expect(result.height).toBe(10);
  });
});
