// Functionality and Component imports
import { useState } from 'react'

import App from '../App'
import Sidebar from './Sidebar'

// Css and asset imports
import '../Css/Header.css'
import img from '../assets/hamburger.svg'

const Header = ({sidebar, setSidebar}) => {
  return (
    <>
    <header>
        {/* Could reasonably implement a redirect here in the future */}
        <img id='sideIcon' src={img} width="100px" alt='Sidebar icon' onClick={() => setSidebar(!sidebar)} />
        <h1 id='logo'>Flixster 🎥</h1>
    </header>
    </>
  )
}

export default Header
