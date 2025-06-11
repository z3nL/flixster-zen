// Functionality and Component imports
import { useEffect, useState } from 'react'
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
    return <App />;
  }

  return (
    <>
    <header>
        <img src={img} width="100px" onClick={() => setSidebar(!sidebar)} />
        <h1 onClick={returnHome}>Flixster 🎥</h1>
    </header>

    {/* TODO Stretch: Implement sidebar after MVP is complete { sidebar && <Sidebar />} */}
    </>
  )
}

export default Header
