function fetchData(pageNum) {

    // Set TMDB fetch options
    const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
    };

    // Fetch data and store/append in/to data
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`, options)
    .then((res) => (res.json()))
    .then((resJSON) => {
        return resJSON;
    })
    .catch((error) => console.log('Error fetching movie data: ', error))
}

export default fetchData;