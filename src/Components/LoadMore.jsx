// Functionality and Component imports
import { useState } from 'react'

// Css and asset imports
import '../Css/LoadMore.css'

// Sole function is incrementing pageNum for ./CardList to react to it. See ./Main for origin
const LoadMore = ({loadMore}) => {
    return (
        <div id='loadMore'>
            {/* TODO Reflect on onClick syntax in this scenario */}
            <button onClick={() => {loadMore()}}>
                Load More
            </button>
        </div>
    )
}

export default LoadMore