import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('check if header exist in code', () => {
  render(<App />);
    const linkElement = screen.getByText("Game")//<div></div>//screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
