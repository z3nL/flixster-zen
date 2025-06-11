// Functionality and Component imports
import { useState } from 'react'

// Component imports
import Personals from './Personals'

// Css and asset imports
import '../Css/Card.css'

// See ./CardList for passing of these parameters
// TODO Stretch: Implement personals
const Card = ({poster, title, rating, setModal}) => {
    const handleOpen = () => {
        setModal(true, {
            "title" : title,
            "backdrop" : backdrop,
            "releaseDate" : releaseDate,
            "rating" : rating,
            // Pass extraInfo as prop and call on it here
            "runtime" : runtime,
            "overview" : overview,
            "genres" : genres
        })
    }

    return (
        <article>
            <img id='poster' src={poster} alt={`Poster for the movie ${title}`} />
            <h1>{title}</h1>
            <p>⭐ {rating}</p>
            <Personals />
        </article>  
    )
}

export default Card