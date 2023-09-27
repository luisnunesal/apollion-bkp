import 'jest-styled-components';

import React from 'react';

import { ProgressBar } from '.';

import { render, screen } from '../../__tests__/setup';

describe('ProgressBar', () => {
  // ---- CONTENT ---- //
  it('Should render successfully', () => {
    render(<ProgressBar progress={10} />);
    expect(screen).toMatchSnapshot();
  });

  // ---- COLORS ---- //
  it('Snapshot should match color="warning"', () => {
    render(<ProgressBar progress={10} color="warning" />);
    expect(screen).toMatchSnapshot();
  });

  // ---- PROGRESS LABEL ---- //
  it('Progress label should be visible ', () => {
    render(<ProgressBar color="warning" progress={10} showProgressLabel />);
    expect(screen.getByText('10%')).toBeDefined();
  });
});
