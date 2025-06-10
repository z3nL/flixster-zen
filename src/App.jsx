import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
