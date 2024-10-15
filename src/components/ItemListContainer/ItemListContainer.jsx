import React from 'react'
import Button from '../Button'

export const ItemListContainer = () => {

    const saludar = () => console.log("holamundo")
    const despedir = () => console.log("hasta el lunes")

  return (
    <div>
        <Button text="saludar" fn={saludar} color="green"/>

        <Button text="saludar" fn={despedir} color="rojo"/>
        
    </div>
  )
}

