import React from 'react';
import { render, screen } from '@testing-library/react';
import Branch from './branch';

describe('Branch Component', () => {

    it('should render properly', () => {
      render(<Branch />);
    });
});
  