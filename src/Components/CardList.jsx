// Functionality and Component imports
import { useState, useEffect } from 'react'
// TODO fetchData is deprecated and moved into cardList until a workaround is found
import fetchData from '../Utils/fetchData.js'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

const CardList = ({pageNum}) => {
    // TODO Array approach for storing data
    const [data, setData] = useState(null);

    // Tracks if the current TMDB Now Playing page # changes and appends more movie cards as such
    useEffect( () => {
        
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
            .then((res) => res.json())
            .then((data) => setData(data == null ? data.results : data.results) )
            .catch((error) => console.log('Error fetching movie data: ', error))

    }, [pageNum]);



    return (
        <section id='cardList'>
            {/* Placeholder while movies load */}
            { !data &&
                <p>Loading movies...</p>
            }

            {/* Maps every movie on page X into a card, note the "w200" in url to request an img width of 200px */}
            { data &&
                data.map(movie => {
                    return (
                        <Card key={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        title={movie.title} rating={parseFloat(movie.vote_average).toFixed(2)} />
                    )
                })
            }
        </section>
    )
}

export default CardList