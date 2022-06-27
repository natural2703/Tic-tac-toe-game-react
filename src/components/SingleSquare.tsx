import React,{FC,useState} from "react"
import { FunctionalComponent } from "vue"

type SingleSquareType = {

}

export const SingleSquare:FunctionalComponent<SingleSquareType> = ()=>{
    const handleClick = (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault()
        console.log('clicked')
        setValue('X')
    }
    const [value,setValue] = useState('')
    return(
        <div className="singleSquare" onClick={(e)=>handleClick(e)}>
            <p>
                {value}
            </p>
        </div>
    )
}
