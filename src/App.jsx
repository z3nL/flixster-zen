import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx'

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="App">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <Main sidebar={sidebar} />
      <Footer />
    </div>
  )
}

export default App
