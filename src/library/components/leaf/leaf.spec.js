import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Leaf from './leaf';

describe('Leaf Component', () => {
  const node = {
    name: 'xyz',
  };

  it('should render properly', () => {
    render(<Leaf node={ node }/>);
  });
  it('should render defaults properly', () => {
    render(<Leaf node={ node } />);
    expect(screen.getByText(/xyz/)).toBeTruthy();
    expect(screen.queryByRole(/checkbox/)).toBeFalsy();
  });
  it('should render checkbox', () => {
    render(<Leaf node={ node } checkboxes/>);
    expect(screen.getByRole(/checkbox/)).toBeTruthy();
  });
  it('checkbox should invoke the given callback', () => {
    const onSelect = jest.fn();

    render(<Leaf node={ node } checkboxes onSelect={ onSelect} />);
    fireEvent.click( screen.getByRole(/checkbox/));
    expect(onSelect).toHaveBeenCalled();
  });
});
