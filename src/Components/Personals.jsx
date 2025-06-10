// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/Personals.css'
import emptyheart from '../assets/hearticon.png'
import shuteye from '../assets/shuteye.png'
import fullheart from '../assets/fullheart.png'
import openeye from '../assets/openeye.svg'


const Personals = () => {
    return (
        <section>
            <img id='favorite' src={emptyheart} />
            <img id='watched' src={shuteye} />
        </section>
    )
}

export default Personals;