import React from 'react'
import './navBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <div className='nav'> 
            <h1>
                "La Gagoneta"
            </h1>
            <a href={"/"}>home </a>
            <a href="">balones</a>
            <a href="">botines</a>
            <a href="">camisetas</a>
            <CartWidget/>
        </div>
    )
}

export default NavBar


