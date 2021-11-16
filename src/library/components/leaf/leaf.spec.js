import React from 'react';
import { render, screen } from '@testing-library/react';
import Leaf from './leaf'

describe('Leaf Component', () => {

    it('should render properly', () => {
      render(<Leaf />)
    })
  });
  