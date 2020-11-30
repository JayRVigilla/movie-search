import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();
});
