// Functionality and Component imports

// Css and asset imports
import '../Css/NavBar.css'

const NavBar = ({setSearchContent, setSearchActive, pageNum, setPageNum, setSortBy}) => {
  
  // Helper function to modify search-related states
  const submitQuery = (query) => {
    // set searchActive to false to confirm we're inputing a new query; this is changed to true in ./CardList
    setSearchActive(false);
    setSearchContent(query);
    setPageNum(1);
  }

  // Responds to submit button; sends the text content of the input box up to Main
  const handleSearch = (event) => {
    event.preventDefault();

    // The first element (index 0) of the form is the input box
    const inputField = event.target[0];

    // Handle undefined behavior when search is hit w/o inputting text
    const query = inputField.value ? inputField.value : "";

    event.target.reset();
    submitQuery(query);
  }

  // Responds to clear button; if we're not already on NP page 1, states will be updated to make it so
  const handleClear = () => {
    setSortBy('default');
    setSearchActive(false);
    setSearchContent("");
    setPageNum(1);
  }

  return (
    <nav>
      {/* Search bar, clear leverages same onClick by just setting search content to empty string */}
      <form id='search' onSubmit={(event) => handleSearch(event)}>
        <input id='searchContent' placeholder='Look up a movie!' />
        <button type='submit'>Search</button>
        <button type='clear' onClick={() => handleClear()}>Now Playing (Clear)</button>
      </form>

      {/* Sort dropdown, changing sort type updates sortBy to be used in ./CardList */}
      <select id='sort' onChange={(event) => {setSortBy(event.target.value); event.target.value='default'}}>
        <option value='default'>Sort by</option>
        <option value='alpha'>A to Z</option>
        <option value='date'>Release Date (Desc.)</option>
        <option value='rating'>Rating (Desc.)</option>
        <option value='popularity'>Popularity (Desc.)</option>
      </select>

    </nav>
  )
}

export default NavBar
