// Functionality and Component imports
import { useState } from 'react'

// Component imports
import Personals from './Personals'

// Css and asset imports
import '../Css/Card.css'
import logo from '../assets/TMDBLogo.svg'

// See ./CardList for passing of these parameters
// TODO Stretch: Implement personals
const Card = ({poster, title, rating}) => {
    return (
        <article>
            <img id='poster' src={poster} />
            <h1>{title}</h1>
            <p>⭐ {rating}</p>
            <Personals />
        </article>  
    )
}

export default Card