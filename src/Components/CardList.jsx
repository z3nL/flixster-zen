// Functionality and Component imports
import { useEffect } from 'react'
import fetchData from '../Utils/fetchData.js'
import sortData from '../Utils/sortData'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

// See ./Main to reference inheritance of these props
const CardList = ({data, setData, searchContent, searchActive, setSearchActive, pageNum, sortBy, setModal}) => {
    
    // Tracks if the current TMDB Now Playing page # changes and appends more movie cards as such
    useEffect( () => {
        fetchData(searchContent, searchActive, pageNum, data, setData, setSearchActive);
    }, [pageNum, searchContent]);

    // Helper to gauge movie title length and condense, if needed; cutoff is 27 chars
    const condense = (title) => {
        return title.length > 27 ? title.substring(0, 26).concat("...") : title;
    }

    // Helper to grab subheader text content
    const sortingReference = {
        'default' : '',
        'alpha' : ', sorted by Title',
        'date' : ', sorted by Most Recent',
        'rating' : ', sorted by Average Rating',
        'popularity' : ', sorted by Popularity',
    }

    return (
        <>
        { data.length > 0 && 
           // Customize the header by active search content and sorting value
            <h2>
                {searchContent ? `Showing results for "${searchContent}"` : `Now Playing`}{sortingReference[sortBy]}
            </h2>
        }

        <section id='cardList'>
            {/* Placeholders while movies are loading / there are no results */}
            { data.length == 0 && !searchActive &&
                <p>Loading movies...</p>
            }
            { data.length == 0 && searchActive &&
                <h3>At least we tried ¯\_(ツ)_/¯ (no results)</h3>
            }

            {/* Maps every movie on page X into a card, note the "w200" in url to request an img width of 200px */}
            {/* Sort the data, if needed, just before mapping to Card elements */}
            { data.length > 0 &&
                sortData(data, sortBy).map(movie => {
                    return (
                        // Condense movie title if it's too long for the card (see 'condense')
                        // round vote averages to 2 decimal places
                        <Card key={movie.id} movieID={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        cardTitle={condense(movie.title)} fullTitle={movie.title}
                        rating={parseFloat(movie.vote_average).toFixed(2)}
                        setModal={setModal} />
                    )
                })
            }
        </section>

        </>
    )
}

export default CardList