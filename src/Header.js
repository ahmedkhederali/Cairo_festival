import React from 'react'
import './components/Header.css'
function Header() {
    return (
        <>
        <span className='header' onClick={()=>(window.scrollTo(0,0))}>
         Cairo Festival 🎬
         <span className='right'><i class="fa fa-user"></i></span>
         
        </span>
        </>
    )
}

export default Header
