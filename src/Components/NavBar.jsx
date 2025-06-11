// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/NavBar.css'

const NavBar = ({setData, setSearchContent, setSearchActive, setPageNum}) => {

  // Responds to submit button; sends the text content of the input box up to Main
  const handleSearch = (event) => {
    event.preventDefault();

    // The first element (index 0) of the form is the input box
    const inputField = event.target[0];

    const query = inputField.value;
    event.target.reset();

    // TODO Implement placeholder changes
    // inputField.placeholder="Displaying results...";

    setSearchContent(query);
    setPageNum(1);
  }

  return (
    <nav>
      {/* Search bar, clear leverages same onClick by just setting search content to empty string */}
      <form id='search' onSubmit={(event) => handleSearch(event)}>
        <input id='searchContent' placeholder='Look up a movie!' />
        
        <button type='clear' onClick={() => {
          // TODO comments describing reset logic
          setSearchContent("");
          setSearchActive(false);
          setData([]);
          setPageNum(1);
        }}>Clear</button>

        <button type='submit'>Search</button>
      </form>

      {/* Sort dropdown */}
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
