import React from 'react';
import { render, screen } from '@testing-library/react';
import Tree from './tree';

describe('Tree Component', () => {

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

  it('should render properly', () => {
    render(<Tree data={ mock }/>);
  });
  it('should render data properly', () => {
    render(<Tree data={ mock }/>);
    expect(screen.getByText(/xyz/)).toBeTruthy();
    expect(screen.getByText(/abc/)).toBeTruthy();
    expect(screen.getByText(/def/)).toBeTruthy();
  });
  it('should render all checkboxes', () => {
    render(<Tree data={ mock }/>);
    expect(screen.getAllByRole(/checkbox/)).toHaveLength(3);
  });
  
});
