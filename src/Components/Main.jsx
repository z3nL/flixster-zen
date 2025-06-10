// Functionality and Component imports
import { useState } from 'react'
import NavBar from './NavBar'
import CardList from './CardList'
import LoadMore from './LoadMore'

// Css and asset imports
import '../Css/Main.css'

const Main = () => {
    return (
        <main>
            <NavBar />
            <CardList />
            <LoadMore />
        </main>
    )
}

export default Main;