import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../Provider/provider';

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
    },
    ];

    it('should render properly', () => {
        render(<Provider data={mock} />);
    });
    it('should render a link', () => {
        const link = document.createElement('a');
        link.setAttribute('data-testid', 'test-link');
       render(
            <Provider data={mock}>
            </Provider>
        );

        expect(screen.getByTestId(/test-link/)).toBeTruthy();
    });
});
