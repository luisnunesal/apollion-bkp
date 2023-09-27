import { SpacingFactory } from './component';

import { createTheme } from '../../themes/ThemeProvider';

const theme = createTheme();

describe('SpacingFactory', () => {
  const token = SpacingFactory({ pt: 'zero' });

  it('Should overwrite CustomProps', () => {
    const result = token({ pt: 'small', theme });

    expect(result).toMatchObject({
      paddingTop: '0.75rem',
    });
  });

  it('Should accept number or string', () => {
    const result = token({ p: 'xs', m: 3, theme });

    expect(result).toMatchObject({
      padding: '0.5rem',
      margin: '0.75rem',
    });
  });

  it('Should return padding left and right', () => {
    const result = token({ px: 'small', theme });

    expect(result).toMatchObject({ paddingLeft: '0.75rem', paddingRight: '0.75rem' });
  });

  it('Should return padding top and bottom', () => {
    const result = token({ py: 'small', theme });

    expect(result).toMatchObject({ paddingTop: '0.75rem', paddingBottom: '0.75rem' });
  });

  it('Should return margin left and right', () => {
    const result = token({ mx: 'small', theme });

    expect(result).toMatchObject({ marginLeft: '0.75rem', marginRight: '0.75rem' });
  });

  it('Should return margin top and bottom', () => {
    const result = token({ my: 'small', theme });

    expect(result).toMatchObject({ marginTop: '0.75rem', marginBottom: '0.75rem' });
  });
});
