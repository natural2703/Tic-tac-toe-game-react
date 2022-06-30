export const checkForWinnger = (gameArray:Array<Array<string>>)=>{
    ///tutaj sprawdzam poziome i pionowe
    for(let i=0;i<gameArray.length;i++){
        if(gameArray[i][0]=='O' && gameArray[i][1]=='O' && gameArray[i][2]=='O')
            return true;
        else if(gameArray[0][i]=='O' && gameArray[1][i]=='O' && gameArray[2][i]=='O')
            return true
    }
    //brzydki sposob ale zasady sa stale
    if(gameArray[0][0]=='O' && gameArray[1][1]=='O' && gameArray[2][2]=='O')
        return true;
    if(gameArray[0][2]=='O' && gameArray[1][1]=='O' && gameArray[2][0]=='O')
        return true;
    return false;
}