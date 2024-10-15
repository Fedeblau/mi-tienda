import React from 'react'



const Button = ({fn, text, color}) => {

    let className = ""

    if(color === "green"){
        className = "verde"
    }else{
        className= "rojo"
    }


  return (
    <button className={className} onClick={fn}>{text}</button>
  )
}

export default Button