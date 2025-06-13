// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/Sidebar.css'

const Sidebar = () => {
    return (
        <section className='sidebar'>
            <button>Watched</button>
            <button>Liked</button>
        </section>
    )
}

export default Sidebar