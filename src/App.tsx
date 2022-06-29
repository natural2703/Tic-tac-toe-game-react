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
  const resetGame = () => {
    setGameArray([
      ["x","x","x"],
      ["x","x","x"],
      ["x","x","x"]
    ])
  }
  return (
    <div className="App">
      <div className='myGamePlace'>
        {gameArray.map((item,index)=>{
          return item.map((square,squareIndex)=>{
            return <SingleSquare gameChar={gameChar} changeGameChar={changeGameChar} posX={squareIndex} posY={index} setGameArray={setGameArray}
            valueFromArray={gameArray[index][squareIndex]}  key={`${index}+${squareIndex}`}/>
          })
        })}
      </div>
      <button onClick={resetGame}>reset</button>
      <button>save game</button>
    </div>
  );
}

export default App;
