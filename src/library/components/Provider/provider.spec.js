import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '../Provider/provider';
import Index from '../index/index';

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
    it('should render child components', () => {        
        render(
            <Provider data={mock}>
                {<a data-testid='link'></a>}
            </Provider> 
        );
        expect(screen.getByTestId('link')).toBeTruthy();
    });
    it('should render all nodes, created by the treeService', () => {        
        render(
            <Provider data={mock}>
                <Index 
                checkboxes 
                selectParents
                />
            </Provider> 
        );
        expect(screen.getByText(/xyz/)).toBeTruthy();
        expect(screen.getByText(/abc/)).toBeTruthy();
        expect(screen.getByText(/def/)).toBeTruthy();
    });
});
