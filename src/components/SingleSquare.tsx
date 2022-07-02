import React,{FC,useState,SetStateAction} from "react"
import { FunctionalComponent } from "vue"

type SingleSquareType = {
    gameChar:string,
    posX:number,
    posY:number,
    valueFromArray:string,
    modifyGameArray:(a:number,b:number)=>void,
    isGameFinished:boolean
}

export const SingleSquare:FunctionalComponent<SingleSquareType> = ({gameChar,posX,posY,valueFromArray,modifyGameArray,isGameFinished})=>{
    const handleClick = (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault()
       if(!blocked){
            if(!isGameFinished){
                setBlocked(true)
                modifyGameArray(posY,posX)
            }
        }
    }
    
    const [blocked,setBlocked] = useState<boolean>(false)
    return(
        <div className="singleSquare" onClick={(e)=>handleClick(e)}>
            <p>
                {valueFromArray}
            </p>
        </div>
    )
}
