import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const page = screen.getByText(/Welcome to TriviaTrek/i);
  expect(page).toBeInTheDocument();
});
