// Set TMDB fetch options
const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN;
const optionsForFetch = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
};

export default optionsForFetch;