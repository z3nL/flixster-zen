// Functionality and Component imports
import { useState } from 'react'
import NavBar from './NavBar'
import CardList from './CardList'
import LoadMore from './LoadMore'

// Css and asset imports
import '../Css/Main.css'

// "Main" functionality of web-app, inclusive of the nav bar, movie cards, and Load More button
const Main = () => {
    // Page number useState and incrementation function utilized across CardList and LoadMore
    const [pageNum, setPageNum] = useState(1);
    const loadMore = () => {
        setPageNum(pageNum+1);
    };

    return (
        <main>
            <NavBar />
            <CardList pageNum={pageNum} />
            <LoadMore loadMore={loadMore} />
        </main>
    )
}

export default Main;