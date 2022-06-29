import React,{useState} from 'react';
import { SingleSquare } from './components/SingleSquare';


const App = () => {
  const [gameArray,setGameArray] = useState<Array<Array<string>>>([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [gameChar,setGameChar] = useState("O")
  const changeGameChar = ()=>{
    if(gameChar === "X"){
      setGameChar("O")
    }else{
      setGameChar("X")
    }
  }
  return (
    <div className="App">
      <div className='myGamePlace'>
        {gameArray.map((item,index)=>{
          return item.map((square,squareIndex)=>{
            return <SingleSquare gameChar={gameChar} changeGameChar={changeGameChar} posX={squareIndex} posY={index}/>
          })
        })}
      </div>
      <button>reset</button>
      <button>save game</button>
    </div>
  );
}

export default App;
