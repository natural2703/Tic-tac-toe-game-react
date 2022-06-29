import React,{FC,useState} from "react"
import { FunctionalComponent } from "vue"

type SingleSquareType = {
    gameChar:string,
    changeGameChar:()=>void,
    posX?:number,
    posY?:number
}

export const SingleSquare:FunctionalComponent<SingleSquareType> = ({gameChar,changeGameChar,posX,posY})=>{
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
                {value}
            </p>
        </div>
    )
}
