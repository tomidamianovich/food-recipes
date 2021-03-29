import { render, screen } from '@testing-library/react';
import Header from './Header';

it('Header renders without crashing', () => {
  const component = () => render(<Header />);
  expect(component).toBeDefined();
});

it('Header app name is being showed and the header class is present', () => {
  render(<Header />);
  const appName = screen.getByTestId('app-name');
  expect(appName).toBeInTheDocument();
  expect(appName).not.toBeNull();
  expect(appName).toHaveClass("Header-container-1")
})
