import React from 'react';
import { render, screen } from '@testing-library/react';
import Branch from './branch';
import { treeService } from '../../services/treeService';

describe('Branch Component', () => {
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
        'hasChildren': false,
        'children': [],
        'parent': 'xyz',
        'context': {}
      },
    ];

    const mockNodes = treeService
      .mapToTree(mock)
      .filter( treeNode => treeNode.hasParent === false); 

    it('should render properly', () => {
      render(<Branch nodes={ mockNodes }/>);
    });
    it('should render data properly', () => {
      render(<Branch nodes={ mockNodes }/>);
      expect(screen.getByText(/xyz/)).toBeTruthy();
      expect(screen.getByText(/abc/)).toBeTruthy();
      expect(screen.getByText(/def/)).toBeTruthy();
      expect(screen.queryByRole(/checkbox/)).toBeFalsy();
    });
    it('should render all checkboxes', () => {
      render(<Branch nodes={ mockNodes } checkboxes/>);
      expect(screen.getAllByRole(/checkbox/)).toHaveLength(3);
    });
    it('should render just a leaf', () => {

      const leafNode = [
        {
          name: 'xyz',
          hasChildren: false,
        }
      ];

      render(<Branch nodes={ leafNode } checkboxes/>);
      expect(screen.getByText(/xyz/)).toBeTruthy();
      expect(screen.getByText(/xyz/).classList).toContain('leaf');
      expect(screen.getAllByRole(/checkbox/)).toHaveLength(1);
    });
});
  