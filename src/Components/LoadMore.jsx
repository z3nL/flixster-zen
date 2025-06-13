// Functionality and Component imports

// Css and asset imports
import '../Css/LoadMore.css'

// Sole function is incrementing pageNum to trigger corresponding useEffect in ./CardList
const LoadMore = ({loadMore, viewSaved}) => {
    return (
        <>
        {/* Arr viewSaved: first value in array toggles liked movies, second toggles watched movies */}
        { !viewSaved[0] && !viewSaved[1] &&
            <div id='loadMore'>
                <button onClick={() => loadMore()}>
                    Load More
                </button>
            </div>
        }
        </>
    )
}

export default LoadMore