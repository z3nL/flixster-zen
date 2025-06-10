// Functionality and Component imports
import { useState } from 'react'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

const CardList = () => {
    return (
        <section id='cardList'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    )
}

export default CardList