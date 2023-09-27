import React from 'react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

import { DropdownComponent } from './component';

import { render, screen } from '../../__tests__/setup';
import { Flex } from '../../containers/Flex';
import { Button } from '../Button';

describe('Dropdown', () => {
  it('Should fail when no options or content is passed', () => {
    // Supress console error since is already expected
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {
      /* */
    });

    expect(() =>
      render(
        <DropdownComponent>
          <Button />
        </DropdownComponent>,
      ),
    ).toThrow();

    spy.mockRestore();
  });

  it('Should render with options list', () => {
    const childrenId = 'children';

    render(
      <DropdownComponent full options={[{ title: 'tenet' }, { title: 'inception' }]}>
        <Button data-testid={childrenId} />
      </DropdownComponent>,
    );

    expect(screen.getByTestId(childrenId)).toBeDefined();
  });

  it('Should render with content as Component', () => {
    const childrenId = 'children';

    render(
      <DropdownComponent full content={<span />}>
        <Button data-testid={childrenId} />
      </DropdownComponent>,
    );

    expect(screen.getByTestId(childrenId)).toBeDefined();
  });

  it('Should render with children as function', () => {
    const childrenId = 'children';

    render(
      <DropdownComponent full options={[{ title: 'tenet' }, { title: 'inception' }]}>
        {({ toggle }) => <Button data-testid={childrenId} onClick={toggle} />}
      </DropdownComponent>,
    );

    expect(screen.getByTestId(childrenId)).toBeDefined();
  });

  it('Should open Dropdown on click', async () => {
    const childrenId = 'children';
    const contentId = 'content';

    render(
      <Flex>
        <DropdownComponent width="5rem" content={<span data-testid={contentId}>OLA MUNDO</span>}>
          {({ toggle }) => <Button data-testid={childrenId} onClick={toggle} />}
        </DropdownComponent>
      </Flex>,
    );

    const triggerButton = screen.getByTestId(childrenId);

    expect(screen.queryByTestId(contentId)).toBeNull();
    expect(triggerButton).toBeDefined();

    act(() => {
      userEvent.click(triggerButton);
    });

    const content = await screen.findByTestId(contentId);

    expect(content).toBeDefined();
  });
});
