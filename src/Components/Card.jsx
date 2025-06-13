// Functionality and Component imports
import { useEffect, useState } from 'react'
import optionsForFetch from '../Utils/optionsForFetch'

// Component imports
import Personals from './Personals'

// Css and asset imports
import '../Css/Card.css'

// TODO Stretch: Implement personals

// See ./CardList to reference inheritance of these props
const Card = ({movieID, poster, cardTitle, fullTitle, rating, setModal}) => {

    // Local useState that tracks fetched movie details
    const [movieDetails, setMovieDetails] = useState([]);

    // Local useState that tracks trailer embed key
    const [embedKey, setEmbedKey] = useState("");

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

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, optionsForFetch)
            .then(res => res.json())
            .then((videos) => {
                // videos contains array results with video info (if there are any)
                // Indiscriminately grab the embed key of the first one
                const vids = videos.results;
                setEmbedKey(vids ? vids[0].key : "")
            })
    }, []);

    // Create modalInfo object that the modal will use to display movie information
    const modalInfo = {
        "title" : fullTitle,
        "backdrop" : movieDetails.backdrop_path,
        "releaseDate" : movieDetails.release_date,
        "rating" : rating,
        "runtime" : movieDetails.runtime,
        "overview" : movieDetails.overview,
        "genres" : movieDetails.genres,
        "embedKey" : embedKey
    }
    
    return (
        <article className='card' onClick={() => setModal([true, modalInfo])}>
            <img id='poster' src={poster} alt={`Poster for the movie ${fullTitle}`} />
            <h1 className='title'>{cardTitle}</h1>
            <p className='rating'>⭐ {rating}</p>
            <Personals />
        </article>  
    )
}

export default Card