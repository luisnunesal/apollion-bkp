import { DeepFactory } from './component';

import { createTheme } from '../../themes/ThemeProvider/props';

const theme = createTheme();

const token = DeepFactory({});

describe('DeepFactory', () => {
  it('Should match object', () => {
    const styleOneMinus = token({
      theme,
      deepColor: 'primary',
      deep: -1,
    });

    expect(styleOneMinus).toMatchObject({ boxShadow: 'inset 0px 0px 4px 0px rgba(50,175,220, 0.3)' });

    const styleZero = token({
      theme,
      deepColor: 'primary',
      deep: 0,
    });

    expect(styleZero).toMatchObject({ boxShadow: '0px 0px 0px 0px rgba(50,175,220, 0.15)' });

    const styleOne = token({
      theme,
      deepColor: 'primary',
      deep: 1,
    });

    expect(styleOne).toMatchObject({ boxShadow: '0px 0px 4px 0px rgba(50,175,220, 0.15)' });

    const styleTwo = token({
      theme,
      deepColor: 'primary',
      deep: 2,
    });

    expect(styleTwo).toMatchObject({ boxShadow: '0px 0px 8px -2px rgba(50,175,220, 0.15)' });

    const styleThree = token({
      theme,
      deepColor: 'primary',
      deep: 3,
    });

    expect(styleThree).toMatchObject({ boxShadow: '0px 0px 16px -4px rgba(50,175,220, 0.15)' });

    const styleFour = token({
      theme,
      deepColor: 'primary',
      deep: 4,
    });

    expect(styleFour).toMatchObject({ boxShadow: '0px 0px 28px -2px rgba(50,175,220, 0.15)' });

    const styleFive = token({
      theme,
      deepColor: 'primary',
      deep: 5,
    });

    expect(styleFive).toMatchObject({ boxShadow: '0px 0px 44px -2px rgba(50,175,220, 0.15)' });

    const styleSix = token({
      theme,
      deepColor: 'primary',
      deep: 6,
    });

    expect(styleSix).toMatchObject({ boxShadow: '0px 0px 72px -2px rgba(50,175,220, 0.15)' });
  });
});
