import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './index';
import Provider from '../Provider/provider';

describe('Index Component', () => {

  const mock = [
    {
      'name': 'xyz',
      'hasChildren': true,
      'children': ['abc', 'def'],
      'context': {}
    },
    {
      'name': 'abc',
      'hasChildren': false,
      'children': [],
      'context': {},
      'parent': 'xyz'

    },
    {
      'name': 'def',
      'hasChildren': true,
      'children': [],
      'parent': 'xyz',
      'context': {}
    },
  ];

  beforeEach(() => {
    render(
        <Provider data={mock}>
            <Index checkboxes/>
        </Provider>
    );
  });
  it('should render properly', () => {
  });
  it('should render data properly', () => {
    expect(screen.getByText(/xyz/)).toBeTruthy();
    expect(screen.getByText(/abc/)).toBeTruthy();
    expect(screen.getByText(/def/)).toBeTruthy();
  });
  it('should render all checkboxes', () => { 
        expect(screen.getAllByRole(/checkbox/)).toHaveLength(3);
  });
  
});
