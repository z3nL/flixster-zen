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

    return (
        <main>
            <Modal 
                modal={modal} setModal={setModal} 
            />

            {sidebar && <Sidebar />}

            <section className='primary'>
                <NavBar 
                    setSearchContent={setSearchContent} 
                    setSearchActive={setSearchActive} 
                    pageNum={pageNum} setPageNum={setPageNum}
                    setSortBy={setSortBy} 
                />

                <CardList 
                    data={data} setData={setData}
                    searchContent={searchContent} setSearchContent={setSearchContent} 
                    searchActive={searchActive} setSearchActive={setSearchActive} 
                    pageNum={pageNum} 
                    sortBy={sortBy} 
                    setModal={setModal} 
                />

                <LoadMore loadMore={loadMore} />
            </section>
        </main>
    )
}

export default Main;