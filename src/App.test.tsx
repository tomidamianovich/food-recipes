import { render } from '@testing-library/react';
import App from './App';

it('Main page renders without crashing', () => {
  const component = () => render(<App />);
  expect(component).toBeDefined();
});

