// Functionality and Component imports
import { useEffect, useState } from 'react'
import optionsForFetch from '../Utils/optionsForFetch'
import saveMovie from '../Utils/saveMovie'

// Css and asset imports
import '../Css/Card.css'
import '../Css/Personals.css'


// See ./CardList to reference inheritance of these props
const Card = 
    ({
        movieID, poster, cardTitle, fullTitle, rating, setModal, 
        liked, setLiked, watched, setWatched
    }) => {
    
    // Query GitHub for the icon assets; why don't the original filepaths work?
    const emptyheart = 'https://raw.githubusercontent.com/z3nL/flixster-zen/refs/heads/main/src/assets/hearticon.png';
    const shuteye = 'https://raw.githubusercontent.com/z3nL/flixster-zen/refs/heads/main/src/assets/shuteye.png';
    const fullheart = 'https://raw.githubusercontent.com/z3nL/flixster-zen/refs/heads/main/src/assets/fullheart.png';
    const openeye = 'https://raw.githubusercontent.com/z3nL/flixster-zen/refs/heads/main/src/assets/openeye.svg';

    // Local useState that tracks fetched movie details
    const [movieDetails, setMovieDetails] = useState([]);

    // Local useState that tracks trailer embed key
    const [embedKey, setEmbedKey] = useState("");

    // Fetch to get the movie runtime and set of genres, which will be displayed on the modal
    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, optionsForFetch)
            .then(res => res.json())
            .then((info) => {
                info.runtime = `${info.runtime} min`
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
            <section className='Personals'>
                <img 
                    id='favorite' src={liked.includes(movieID) ? fullheart : emptyheart} 
                    onClick={(event) => saveMovie(event, movieID, liked, setLiked, watched, setWatched)} 
                />
                <img 
                    id='watched' src={watched.includes(movieID) ? openeye : shuteye} 
                    onClick={(event) => saveMovie(event, movieID, liked, setLiked, watched, setWatched)} 
                />
            </section>
        </article>  
    )
}

export default Card