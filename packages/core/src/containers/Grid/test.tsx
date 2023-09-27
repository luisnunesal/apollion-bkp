import React from 'react';

import { setGridBreakpoints } from './style';
import { Grid } from '.';

import { render, screen } from '../../__tests__/setup';
import { createTheme } from '../../themes';

const theme = createTheme();

describe('GRID', () => {
  it('Should just render', () => {
    const testId = 'grid-container';
    render(<Grid data-testid={testId} />);

    expect(screen.getByTestId(testId)).toBeDefined();
  });

  it('Should return single medias as "xs"', () => {
    const medias = {
      areas: 'icon title',
      columns: 'auto 1fr',
    };

    const style = setGridBreakpoints({
      theme,
      medias,
    });

    expect(style).toMatchObject({
      gridTemplateAreas: medias.areas,
      gridTemplateColumns: medias.columns,
    });
  });

  it('Should return "xs" media', () => {
    const medias = {
      xs: {
        columnGap: 'small' as const,
        rowGap: 'small' as const,
        columns: 'auto 1fr',
      },
    };

    const style = setGridBreakpoints({
      theme,
      medias,
    });

    expect(style).toMatchObject({
      '@media (min-width:0px)': {
        gridColumnGap: '0.75rem',
        gridRowGap: '0.75rem',
        gridTemplateColumns: medias.xs.columns,
      },
    });
  });

  it('Should fail if medias does not contain "xs"', () => {
    const medias = {
      sm: {
        areas: 'icon title',
        columns: 'auto 1fr',
      },
    };

    const style = setGridBreakpoints({
      theme,
      medias,
    });

    expect(style).toMatchObject({});
  });
});
