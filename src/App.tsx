import React,{useEffect, useState} from 'react';
import { SingleSquare } from './components/SingleSquare';
import { checkForWinnger } from './services/checkForWinner';


const App = () => {
  const [gameArray,setGameArray] = useState<Array<Array<string>>>([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [gameChar,setGameChar] = useState<string>("O")
  const [gameFinished,setGameFinished] = useState<boolean>(false);
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
    ]);
    setGameFinished(false);
  }
  const handleClick = (a:number,b:number)=>{
    let tmpArray = [...gameArray]
    tmpArray[a][b] = gameChar
    setGameArray(tmpArray)
    changeGameChar()
  }
  useEffect(()=>{
   if(checkForWinnger(gameArray)){
    alert("skonczono gre");
    setGameFinished(true)
   }
  },[gameArray])
  const saveGame = ():void=>{
    localStorage.setItem('gameArray',JSON.stringify(gameArray));
    // let myArr = [(JSON.parse(localStorage.getItem('gameArray')??"null"))]
    // console.log(myArr)
  }
  const loadGame = ():void=>{
    let myArr = [(JSON.parse(localStorage.getItem('gameArray')??""))]
    if(myArr){
        setGameArray(myArr)
    }
  }
  return (
    <div className="App">
      <h2>Game</h2>
      <div className='myGamePlace'>
        {gameArray.map((item,index)=>{
          return item.map((square,squareIndex)=>{
            return <SingleSquare gameChar={gameChar} posX={squareIndex} posY={index}
            valueFromArray={gameArray[index][squareIndex]}  key={`${index}+${squareIndex}`} 
            modifyGameArray={handleClick} isGameFinished={gameFinished}/>
          })
        })}
      </div>
      <button onClick={resetGame}>reset</button>
      <button onClick={saveGame}>save game</button>
      <button onClick={loadGame}>load game</button>
    </div>
  );
}

export default App;
