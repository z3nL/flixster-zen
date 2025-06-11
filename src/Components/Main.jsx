// Functionality and Component imports
import { useState } from 'react'
import NavBar from './NavBar'
import CardList from './CardList'
import LoadMore from './LoadMore'

// Css and asset imports
import '../Css/Main.css'

// "Main" functionality of web-app, inclusive of the nav bar, movie cards, and Load More button
const Main = () => {

    // Data to display movie cards
    const [data, setData] = useState([]);

    // Page number useState and incrementation function utilized across NavBar, CardList and LoadMore
    const [pageNum, setPageNum] = useState(1);
    const loadMore = () => {
        setPageNum(pageNum+1);
    };

    // Search content useState and modification function utilized across nav bar and card list
    const [searchContent, setSearchContent] = useState("");

    // TODO searchActive comments
    const [searchActive, setSearchActive] = useState(false);

    return (
        <main>
            <NavBar setData={setData} setSearchContent={setSearchContent} setSearchActive={setSearchActive} setPageNum={setPageNum} />
            <CardList data={data} setData={setData}
                searchContent={searchContent} setSearchContent={setSearchContent} 
                searchActive={searchActive} setSearchActive={setSearchActive} pageNum={pageNum} />
            <LoadMore loadMore={loadMore} />
        </main>
    )
}

export default Main;