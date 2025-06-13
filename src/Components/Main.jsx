// Functionality and Component imports
import { useState } from 'react'
import NavBar from './NavBar'
import CardList from './CardList'
import LoadMore from './LoadMore'
import Modal from './Modal'
import Sidebar from './Sidebar'

// Css and asset imports
import '../Css/Main.css'

// "Main" functionality of web-app, inclusive of the nav bar, movie cards, and Load More button
const Main = ({sidebar}) => {

    // Data to display movie cards
    const [data, setData] = useState([]);

    // Page number useState and incrementation function utilized across NavBar, CardList and LoadMore
    const [pageNum, setPageNum] = useState(1);
    const loadMore = () => {
        setPageNum(pageNum+1);
    };

    // Search content useState and modification function utilized across nav bar and card list
    const [searchContent, setSearchContent] = useState("");

    // Active search useState and modification function utilized across nav bar and card list
    const [searchActive, setSearchActive] = useState(false);

    // Sort by useState and update function utilized across nav bar and card list
    const [sortBy, setSortBy] = useState("default");

    // modal useState and update function utilized across nav bar and card list
    // contains array holding a Boolean tracking modal status and object containing modal info to display
    const [modal, setModal] = useState([false, {}]);

    // useStates that track if card list view should switch to saved content
    // contains array of Booleans: first value toggles liked movies, second toggles watched movies
    const [viewSaved, setViewSaved] = useState([false, false])

    // useStates that store saved content to be referenced in card list view when needed
    // contains array of movie IDs to check inclusion
    const [liked, setLiked] = useState([]);
    const [watched, setWatched] = useState([]);


    // useState to cache existing data before a sidebar click occurred
    const [cache, setCache] = useState([]);

    return (
        <main>
            <Modal 
                modal={modal} setModal={setModal} 
            />

            {sidebar && 
                <Sidebar setViewSaved={setViewSaved} />
            }

            <section className='primary'>
                <NavBar 
                    setSearchContent={setSearchContent} 
                    setSearchActive={setSearchActive} 
                    setPageNum={setPageNum}
                    setSortBy={setSortBy}
                    viewSaved={viewSaved}
                />

                <CardList 
                    data={data} setData={setData}
                    searchContent={searchContent} setSearchContent={setSearchContent} 
                    searchActive={searchActive} setSearchActive={setSearchActive} 
                    pageNum={pageNum} 
                    sortBy={sortBy} 
                    setModal={setModal} 
                    viewSaved={viewSaved} setViewSaved={setViewSaved}
                    liked={liked} setLiked={setLiked}
                    watched={watched} setWatched={setWatched}
                    cache={cache} setCache={setCache}
                />

                <LoadMore loadMore={loadMore} viewSaved={viewSaved} setViewSaved={setViewSaved} />
            </section>
        </main>
    )
}

export default Main;