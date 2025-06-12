// Functionality and Component imports
import { useEffect, useState } from 'react'
import optionsForFetch from '../Utils/optionsForFetch'

// Component imports
import Personals from './Personals'

// Css and asset imports
import '../Css/Card.css'

// See ./CardList for passing of these parameters
// TODO Stretch: Implement personals
const Card = ({movieID, poster, title, rating, setModal}) => {

    // Local useState that tracks fetched movie details
    const [movieDetails, setMovieDetails] = useState([]);

    // Fetch to get the movie runtime and set of genres, which will be displayed on the modal
    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, optionsForFetch)
            .then(res => res.json())
            .then((info) => {
                info.runtime = `${parseInt(info.runtime/60)} hr ${parseInt(info.runtime)%60} min`
                info.genres = info.genres.map((genre) => genre.name).join(", ");
                setMovieDetails(info);
            })
            .catch((error) => console.log('Error populating modal info: ', error))
    }, []);

    // Create modalInfo object that the modal will use to display movie information
    const modalInfo = {
        "title" : title,
        "backdrop" : movieDetails.backdrop_path,
        "releaseDate" : movieDetails.release_date,
        "rating" : rating,
        "runtime" : movieDetails.runtime,
        "overview" : movieDetails.overview,
        "genres" : movieDetails.genres
    }

    return (
        <article className='card'>
            <img id='poster' onClick={() => setModal([true, modalInfo])} src={poster} alt={`Poster for the movie ${title}`} />
            <h1 onClick={() => setModal([true, modalInfo])}>{title}</h1>
            <p>⭐ {rating}</p>
            <Personals />
        </article>  
    )
}

export default Card