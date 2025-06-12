// Import TMDB fetch options
import fetchOptions from "./optionsForFetch";

// Fetches data from TMDB to display on the page
function fetchData(searchContent, searchActive, pageNum, data, setData, setSearchActive) {
    // Decide on the url for data fetching
    const url = (searchContent, searchActive) => {

        // Format the incoming query if it's for a new search; otherwise, use the stored one
        if (searchContent) {
            const args = !searchActive ? searchContent.split(" ").join("%20") : searchContent;
            return `https://api.themoviedb.org/3/search/movie?query=${args}&include_adult=false&language=en-US&page=${pageNum}`;

        // Otherwise, just query Now Playing
        } else {
            return `https://api.themoviedb.org/3/movie/now_playing?include_adult=false&language=en-US&page=${pageNum}`;
        }
    };

    // Fetch and store data
    fetch(url(searchContent, searchActive), fetchOptions)
        .then((res) => res.json())
        .then((page) => {

            // Default now playing, page X case
            if (!searchContent && !searchActive) {
                setData(pageNum == 1 ? [...page.results] : [...data, ...page.results]);
            }

            // A new search is initialized, display only the first page of the search results
            else if (searchContent && !searchActive) {
                setData([...page.results]);
                setSearchActive(true);
            }
            
            // Append new content to existing search
            else if (searchContent && searchActive) {
                setData([...data, ...page.results]);
            }

            // Write this edge case for consistency, but this should never happen
            else if (!searchContent && searchActive) {
                console.error("No search content but active search; how?");
            }
        })
        .catch((error) => console.log('Error fetching movie data: ', error))
}

export default fetchData;