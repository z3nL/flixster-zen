// Functionality and Component imports

// Css and asset imports
import '../Css/LoadMore.css'

// Sole function is incrementing pageNum to trigger corresponding useEffect in ./CardList
const LoadMore = ({loadMore}) => {
    return (
        <div id='loadMore'>
            <button onClick={() => loadMore()}>
                Load More
            </button>
        </div>
    )
}

export default LoadMore