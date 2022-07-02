export const save = (gameArray:Array<Array<string>>):void =>{
    localStorage.setItem('gameArray',JSON.stringify(gameArray));
}

export const load = (setGameArray:React.Dispatch<React.SetStateAction<string[][]>>):void =>{
    let myArr = (JSON.parse(localStorage.getItem('gameArray')??""))
    console.log(myArr)
    if(myArr){
        setGameArray(myArr)
    }
}
