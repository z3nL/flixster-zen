// Functionality and Component imports
import { useState } from 'react'

// Component imports
import Personals from './Personals'

// Css and asset imports
import '../Css/Card.css'
import logo from '../assets/TMDBLogo.svg'

const Card = () => {
    return (
        <article>
            <img id='poster' src={logo} />
            <h1>Thank you TMDB</h1>
            <p>⭐ 9.99</p>
            <Personals />
        </article>  
    )
}

export default Card