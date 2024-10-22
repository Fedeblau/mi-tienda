import React, { useState } from 'react'
import Button from '../Button'
let productos = [
  {categoria: "camisetas",
    nombre: "manga larga",
  },
  {
    categoria:"camisetas",
    nombre:"manga corta"
  },
  {
    categoria: "balones",
    nombre: "numero 5"
  },
 {
    categoria: "balones",
    nombre: "numero 10"
  }, 
 {
    categoria: "balones",
    nombre: "numero 7"
  }, 
 ]

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState(productos)
  
  const showCamisetas = () => {
    let res = products.filter(e=>e.categoria === "camisetas")
    setProducts(res)
  }
  const showBalones = () => {
    let res = products.filter(e=>e.categoria === "balones")
    setProducts(res)
  }

  const showAll = ()=> {  
    setProducts(productos)
  }


  console.log("se renderiza ILC")


  return (
    <div>
      <button onClick={showCamisetas}>camisetas</button>
      <button onClick={showBalones}>balones</button>
      <button onClick={showAll}>todos</button>
      {products.map((product) => {
        return(
          <>
          <h3>{product.categoria}</h3>

          
          <h3>{product.nombre}</h3>   
          </>
      )}
      )}
    </div>
  )
}

