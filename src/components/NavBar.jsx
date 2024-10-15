import React from 'react'
import './navBar.css'

const NavBar = ( {chau , saludo, links} ) => {

    return (
        <div className='nav'> 
            <h1>
                {saludo}
            </h1>
            <a href={links[0].href }>{links[0].title}</a>
            <a href="">{links[1]}</a>
            <a href="">3</a>
            <a href="">4</a>
        </div>
    )
}

export default NavBar


