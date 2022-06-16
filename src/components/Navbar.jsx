import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/Themecontext';

const Navbar = () => {

    const {islight, toggletheme} = useContext(ThemeContext);
  return (
    <div className='navbar'>

<div className='leftnavbar'>
    <div className='menuhead'>Menu</div>
    <div className='menuhead'>Deals</div>
    </div>

<div className='rightnavbar'>
    <div className='menuhead'>Sign in </div>

       <div> <button className='togglebttn' onClick={toggletheme}>{`Make ${islight ? "dark" : "light"}`}</button></div>
       </div>
    </div>
  )
}

export default Navbar;