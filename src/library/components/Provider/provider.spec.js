import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../Provider/provider';
import { useTreeContext } from '../../hooks/useTreeContext';

describe('Provider Component', () => {

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
        }
    ];

    it('should render properly', () => {
        render(<Provider data={mock} />);
    });
});
