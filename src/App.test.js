import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Importar 'act' desde 'react'
import App from './App';

test('renders learn react link', () => {
  act(() => { // Envolver el render en un act
    render(<App />);
  });
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});