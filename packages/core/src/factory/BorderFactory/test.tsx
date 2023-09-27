import { BorderFactory } from './component';

import { createTheme } from '../../themes/ThemeProvider/props';

const theme = createTheme();

const token = BorderFactory({});

describe('BorderFactory', () => {
  it('Should match object', () => {
    const styleRound = token({
      theme,
      round: 'circular',
    });

    expect(styleRound).toMatchObject({
      borderRadius: '100%',
    });

    const style = token({
      theme,
      borderColor: 'primary',
      borderRadius: 'circular',
      borderStyle: 'solid',
      borderWidth: 'thin',
    });

    expect(style).toMatchObject({
      borderRadius: '100%',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#32AFDC',
    });
  });

  it('Should not have radius with "square" prop', () => {
    const style = token({
      theme,
      square: true,
      borderColor: 'primary',
      borderRadius: 'circular',
      borderStyle: 'solid',
      borderWidth: 'thin',
    });

    expect(style).toMatchObject({
      borderRadius: undefined,
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#32AFDC',
    });
  });

  it('Should have border only on top', () => {
    const style = token({
      theme,
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderPosition: 'top',
    });

    expect(style).toMatchObject({
      borderTopColor: '#32AFDC',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    });
  });

  it('Should have border only on bottom', () => {
    const style = token({
      theme,
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderPosition: 'bottom',
    });

    expect(style).toMatchObject({
      borderBottomColor: '#32AFDC',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
    });
  });

  it('Should have border only on left', () => {
    const style = token({
      theme,
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderPosition: 'left',
    });

    expect(style).toMatchObject({
      borderLeftColor: '#32AFDC',
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
    });
  });

  it('Should have border only on right', () => {
    const style = token({
      theme,
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderPosition: 'right',
    });

    expect(style).toMatchObject({
      borderRightColor: '#32AFDC',
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
    });
  });

  it('Should have border on both sides', () => {
    const style = token({
      theme,
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderPosition: 'horizontal',
    });

    expect(style).toMatchObject({
      borderLeftColor: '#32AFDC',
      borderLeftStyle: 'solid',
      borderLeftWidth: '1px',
      borderRightColor: '#32AFDC',
      borderRightStyle: 'solid',
      borderRightWidth: '1px',
    });
  });

  it('Should have border on top and bottom', () => {
    const style = token({
      theme,
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderPosition: 'vertical',
    });

    expect(style).toMatchObject({
      borderTopColor: '#32AFDC',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
      borderBottomColor: '#32AFDC',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
    });
  });
});
