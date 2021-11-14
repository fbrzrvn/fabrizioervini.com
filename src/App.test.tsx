import { render } from '@testing-library/react';
import React from 'react';
import Home from './pages/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Home', () => {
  it('should render the home without crashing', () => {
    render(<Home />);
  });
});
