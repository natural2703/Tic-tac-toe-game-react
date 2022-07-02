import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { SingleSquare } from './components/SingleSquare';

test('check if header exist in code', () => {
  render(<App />);
    const linkElement = screen.getByText("Game")//<div></div>//screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
test("check if component has a char",()=>{
  render(<SingleSquare gameChar='O' posX={1} posY={2} valueFromArray={''} modifyGameArray={function (a: number, b: number): void {
    throw new Error('Function not implemented.');
  } } isGameFinished={false} />)
  
})