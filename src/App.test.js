import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pedro Molina name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Pedro Molina/i);
  expect(nameElement).toBeInTheDocument();
});