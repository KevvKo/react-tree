import { render } from '@testing-library/react';
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
});
