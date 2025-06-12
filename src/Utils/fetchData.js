import fetchOptions from "./optionsForFetch";

function fetchData(searchContent, searchActive, pageNum, data, setData, setSearchActive) {

    // Decide on the url for data fetching
    const url = (searchContent, searchActive) => {

        // Is there a new query or search active? Pass the new query / preserved one as an argument
        if (searchContent || searchActive) {
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

            // If a new search is initialized, display only the first page of the search results
            if (searchContent && !searchActive) {
                setData([...page.results]);
                setSearchActive(true);
            
            // Otherwise, either a search is already active or we're just loading Now Playing.
            // We are okay to append the content of page X to the existing data (where if it's empty, we append page 1 to start)
            } else {
                setData([...data, ...page.results]);
            }
        })
        .catch((error) => console.log('Error fetching movie data: ', error))
}

export default fetchData;