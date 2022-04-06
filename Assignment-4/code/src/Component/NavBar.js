import React from 'react'
import Logo1 from '../Images/Logo1.png'
import Inf from '../Images/Logo3.png'

function NavBar() {
  return (
    <nav className='header'>
        <div>
        <img src= {Logo1} alt="Logo" id="header-firstImage"/>
        <h1 style={{display:'inline-block'}}>Ijaaz Clone</h1>
        </div>
        <img src={Inf} alt="Camera Icon" id="header-secondImages"/>
    </nav>
  )
}



export default NavBar 