// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/NavBar.css'

const NavBar = ({setData, setSearchContent, setSearchActive, setPageNum, setSortBy}) => {

  // Responds to submit button; sends the text content of the input box up to Main
  const handleSearch = (event) => {
    event.preventDefault();

    // The first element (index 0) of the form is the input box
    const inputField = event.target[0];

    // TODO Core low prio: Fix blank search
    const query = inputField.value ? inputField.value : "";
    event.target.reset();

    // TODO Stretch: Implement placeholder changes
    //inputField.placeholder="Displaying results...";

    // set searchActive to false to confirm we're inputing a new query; this is changed to true in ./CardList
    setSearchActive(false);
    setSearchContent(query);
    setPageNum(1);
  }

  // TODO Core low prio: Fix clear
  // Responds to clear button; empty/reset associated card list data to set display back to NP page 1
  const handleClear = () => {
    setData([]);
    setSearchContent("");
    setSearchActive(false);
    setPageNum(1);
  }

  return (
    <nav>
      {/* Search bar, clear leverages same onClick by just setting search content to empty string */}
      <form id='search' onSubmit={(event) => handleSearch(event)}>
        <input id='searchContent' placeholder='Look up a movie!' />
        <button type='submit'>Search</button>
        <button type='clear' onClick={() => handleClear()}>Clear</button>
      </form>

      {/* Sort dropdown, changing sort type updates sortBy to be used in ./CardList */}
      <select id='sort' onChange={(event) => setSortBy(event.target.value)}>
        <option value='default'>Sort by</option>
        <option value='alpha'>A to Z</option>
        <option value='date'>Release Date (Desc.)</option>
        <option value='rating'>Rating (Desc.)</option>
      </select>

    </nav>
  )
}

export default NavBar
