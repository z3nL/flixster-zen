// If you are reading this, then this hasn't been implemented as a stretch feature yet
// It is currently a static visual element

// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/Personals.css'
import emptyheart from '../assets/hearticon.png'
import shuteye from '../assets/shuteye.png'
import fullheart from '../assets/fullheart.png'
import openeye from '../assets/openeye.svg'


const Personals = () => {
    
    const onInteract = (event, type) => {
        const target = event.target;
        const source = target.src.split("assets/")[1];

        if (type == "heart") {
            target.src = source == fullheart.split("assets/")[1] ? emptyheart : fullheart;
        }
        else if (type == "eye") {
            target.src = source == openeye.split("assets/")[1] ? shuteye : openeye;
        }

        event.stopPropagation();
    }

    return (
        <section className='Personals'>
            <img id='favorite' src={emptyheart} onClick={(event) => onInteract(event, "heart")} />
            <img id='watched' src={shuteye} onClick={(event) => onInteract(event, "eye")} />
        </section>
    )
}

export default Personals;