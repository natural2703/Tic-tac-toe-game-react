import React,{FC,useState,SetStateAction} from "react"
import { FunctionalComponent } from "vue"

type SingleSquareType = {
    gameChar:string,
    changeGameChar:()=>void,
    posX?:number,
    posY?:number,
    setGameArray:React.Dispatch<SetStateAction<string[][]>>,
    valueFromArray:string,
    modifyGameArray?:(a:number,b:number)=>void
}

export const SingleSquare:FunctionalComponent<SingleSquareType> = ({gameChar,changeGameChar,posX,posY,valueFromArray,modifyGameArray})=>{
    const handleClick = (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault()
       // console.log('clicked')
       if(!blocked){
           setBlocked(true)
           changeGameChar()
           setValue(gameChar)
           
        }
    }
    
    const [value,setValue] = useState('')
    const [blocked,setBlocked] = useState<boolean>(false)
    return(
        <div className="singleSquare" onClick={(e)=>handleClick(e)}>
            <p>
                {valueFromArray}
            </p>
        </div>
    )
}
