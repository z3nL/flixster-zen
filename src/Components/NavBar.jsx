// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/NavBar.css'

const NavBar = () => {
  return (
    <nav>

      <form id='search'>
        <input id='searchContent' placeholder='Look up a movie!' />
        <button type='clear'>Clear</button>
        <button type='submit'>Search</button>
      </form>

      <select id='sort'>
        <option value='default'>Sort by</option>
        <option value='alpha'>A to Z</option>
        <option value='date'>Release Date (Desc.)</option>
        <option value='rating'>Rating (Desc.)</option>
      </select>

    </nav>
  )
}

export default NavBar
