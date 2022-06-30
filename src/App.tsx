import React,{useEffect, useState} from 'react';
import { SingleSquare } from './components/SingleSquare';
import { checkForWinnger } from './services/checkForWinner';


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
      ["","",""],
      ["","",""],
      ["","",""]
    ])
  }
  const handleClick = (a:number,b:number)=>{
    let tmpArray = [...gameArray]
    tmpArray[a][b] = gameChar
    setGameArray(tmpArray)
    changeGameChar()
  }
  useEffect(()=>{
    console.log(checkForWinnger(gameArray))
  },[gameArray])
  return (
    <div className="App">
      <div className='myGamePlace'>
        {gameArray.map((item,index)=>{
          return item.map((square,squareIndex)=>{
            return <SingleSquare gameChar={gameChar} posX={squareIndex} posY={index}
            valueFromArray={gameArray[index][squareIndex]}  key={`${index}+${squareIndex}`} modifyGameArray={handleClick}/>
          })
        })}
      </div>
      <button onClick={resetGame}>reset</button>
      <button>save game</button>
    </div>
  );
}

export default App;
