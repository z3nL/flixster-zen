async function fetchData() {
    const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
    };

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const res = await response.json();
        return res;
    } catch (error) {
        console.log ('Fetching now playing data: ', error);
    }
}

export default fetchData;