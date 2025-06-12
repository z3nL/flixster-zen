// Functionality and Component imports
import { useState } from 'react'

// If you are reading this, then these haven't been implemented as stretch features yet
// They are currently inactive
import App from '../App'
import Sidebar from './Sidebar'

// Css and asset imports
import '../Css/Header.css'
import img from '../assets/hamburger.svg'

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  {/* TODO Stretch: Implement returning to home */}
  const returnHome = () => {
    setSidebar(false);
  }

  return (
    <>
    <header>
        <img src={img} width="100px" alt='Sidebar icon' onClick={() => setSidebar(!sidebar)} />
        <h1 onClick={returnHome}>Flixster 🎥</h1>
    </header>

    {/* TODO Stretch: Implement sidebar after MVP is complete */}
    </>
  )
}

export default Header
