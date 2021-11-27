import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Leaf from './leaf';
import Provider from '../Provider/provider';

describe('Leaf Component', () => {
  const node = {
    name: 'xyz',
  };

  it('should render properly', () => {
    render(
      <Provider data={[node]}>
        <Leaf node={ node }/>);
      </Provider>
    );
  });
  it('should render defaults properly', () => {
    render(
      <Provider data={[node]}>
        <Leaf node={ node }/>);
      </Provider>
    );
    expect(screen.getByText(/xyz/)).toBeTruthy();
    expect(screen.queryByRole(/checkbox/)).toBeFalsy();
  });
  it('should render checkbox', () => {
    render(
      <Provider data={[node]}>
        <Leaf node={ node } checkboxes/>);
      </Provider>
    );
    expect(screen.getByRole(/checkbox/)).toBeTruthy();
  });
  it('checkbox should invoke the given callback', () => {
    const onSelect = jest.fn();
    render(
      <Provider data={[node]}>
        <Leaf node={ node } checkboxes onSelect={ onSelect}/>);
      </Provider>
    );
    fireEvent.click( screen.getByRole(/checkbox/));
    expect(onSelect).toHaveBeenCalled();
  });
});
