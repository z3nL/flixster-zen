// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/Sidebar.css'

// first value in array toggles liked movies, second toggles watched movies
const Sidebar = ({setViewSaved}) => {
    return (
        <section className='sidebar'>
            <button onClick={() => setViewSaved([false, false])}>Home</button>
            <button onClick={() => setViewSaved([true, false])}>Liked</button>
            <button onClick={() => setViewSaved([false, true])}>Watched</button>
        </section>
    )
}

export default Sidebar