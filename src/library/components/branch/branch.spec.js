import React from 'react';
import { render, screen } from '@testing-library/react';
import Branch from './branch';
import Provider from '../Provider/provider';
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
      render(
        <Provider data={mock}>
          <Branch nodes={ mockNodes }/>
        </Provider>
      );
    });
    it('should render data properly', () => {
      render(
        <Provider data={mock}>
          <Branch nodes={ mockNodes }/>
        </Provider>
      );
      expect(screen.getByText(/xyz/)).toBeTruthy();
      expect(screen.getByText(/abc/)).toBeTruthy();
      expect(screen.getByText(/def/)).toBeTruthy();
      expect(screen.queryByRole(/checkbox/)).toBeFalsy();
    });
    it('should render all checkboxes', () => {
      render(
        <Provider data={mock}>
          <Branch nodes={ mockNodes } checkboxes/>
        </Provider>
      );
      expect(screen.getAllByRole(/checkbox/)).toHaveLength(3);
    });
    it('should render just a leaf', () => {

      const leafNode = [
        {
          name: 'xyz',
          hasChildren: false,
        }
      ];

      render(
        <Provider data={mock}>
          <Branch nodes={ leafNode } checkboxes/>
        </Provider>
      );
      expect(screen.getByText(/xyz/)).toBeTruthy();
      expect(screen.getByText(/xyz/).classList).toContain('leaf');
      expect(screen.getAllByRole(/checkbox/)).toHaveLength(1);
    });
});
  