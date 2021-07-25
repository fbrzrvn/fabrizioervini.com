import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Home', () => {
  it('should render the home without crashing', () => {
    render(<App />);
  });
});
