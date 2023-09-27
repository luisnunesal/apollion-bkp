import React from 'react';
import userEvent from '@testing-library/user-event';

import { List, ListContentType } from '.';

import { render, screen } from '../../__tests__/setup';

const content: ListContentType[] = [{ title: 'title 1' }, { title: 'title 2' }, { title: 'title 3' }];

describe('List', () => {
  it('Should render all items', async () => {
    render(<List content={content} />);

    const listItem = await screen.findAllByRole('listitem');

    expect(listItem.length).toBe(3);
  });

  it('Should call callback function on user Click', async () => {
    const onSelectItem = jest.fn();
    render(<List multiple content={content} onSelectItems={onSelectItem} />);

    const listItem = await screen.findAllByRole('listitem');

    userEvent.click(listItem[0]);
    userEvent.click(listItem[1]);

    expect(onSelectItem).toHaveBeenCalledTimes(2);

    expect(onSelectItem).toHaveBeenNthCalledWith(1, [
      { title: 'title 1', isSelected: true, id: expect.anything() },
      { title: 'title 2', isSelected: false, id: expect.anything() },
      { title: 'title 3', isSelected: false, id: expect.anything() },
    ]);

    expect(onSelectItem).toHaveBeenNthCalledWith(2, [
      { title: 'title 1', isSelected: true, id: expect.anything() },
      { title: 'title 2', isSelected: true, id: expect.anything() },
      { title: 'title 3', isSelected: false, id: expect.anything() },
    ]);
  });

  it('Should match snapshot', () => {
    render(
      <List
        multiple
        showCheckIcon
        content={[
          { title: 'title 1', isSelected: true },
          { title: 'title 1', isSelected: true },
        ]}
      />,
    );

    expect(screen).toMatchSnapshot();
  });
});
