import { render, screen } from '@testing-library/react';
import React from 'react';
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
    render(<Tree data={ mock } />);
  });
  it('should render all nodes properly', () => {
    render(<Tree data={ mock } />);
    expect(screen.getByText(/xyz/)).toBeTruthy();
    expect(screen.getByText(/abc/)).toBeTruthy();
    expect(screen.getByText(/def/)).toBeTruthy();
  });
  it('should render all expected checkboxes' ,() => {
    render(<Tree data={ mock }/>);
    expect(screen.getAllByRole(/checkbox/)).toHaveLength(3);
  });
});
