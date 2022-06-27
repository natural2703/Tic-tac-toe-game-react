import React from 'react';
import { SingleSquare } from './components/SingleSquare';


function App() {

  return (
    <div className="App">
      <div className='squareRow'>
        <SingleSquare/>
        <SingleSquare/>
        <SingleSquare/>
      </div>
      <div className='squareRow'>
        <SingleSquare/>
        <SingleSquare/>
        <SingleSquare/>
      </div>
      <div className='squareRow'>
        <SingleSquare/>
        <SingleSquare/>
        <SingleSquare/>
      </div>
      
    </div>
  );
}

export default App;
