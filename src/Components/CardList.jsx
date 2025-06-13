// Functionality and Component imports
import { useEffect, useState } from 'react'
import fetchData from '../Utils/fetchData.js'
import sortData from '../Utils/sortData'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

// See ./Main to reference inheritance of these props
const CardList =
    ({
        data, setData, searchContent, searchActive, setSearchActive, 
        pageNum, sortBy, setModal,
        viewSaved, liked, setLiked, watched, setWatched,
        cache, setCache
    }) => {
    
    // Tracks if the current TMDB Now Playing page # changes and appends more movie cards as such
    useEffect( () => {
        fetchData(searchContent, searchActive, pageNum, data, setData, setSearchActive);
    }, [pageNum, searchContent]);



    // Tracks sidebar clicks and filters data accordingly
    useEffect( () => {
        // Arr viewSaved: first value in array toggles liked movies, second toggles watched movies
        const viewLiked = viewSaved[0];
        const viewWatched = viewSaved[1];
        
        let dataReference;

        // Pop the cache
        if (cache.length > 0) {
            dataReference = cache;
            // These changes are in effect AFTER the useEffect
            setData(cache);
        }
        // If the cache is empty, store the data in it
        else {
            dataReference = data;
            // This change is in effect AFTER the useEffect
            setCache(data);
        }

        if (viewLiked) {
            setData(dataReference.filter((movie) => liked.includes(movie.id)));
        }
        else if (viewWatched) {
            setData(dataReference.filter((movie) => watched.includes(movie.id)));
        }
    }, [viewSaved]);

    // Tracks updates to liked re-render its corresponding page
    useEffect( () => {
        // Arr viewSaved: first value in array toggles liked movies, second toggles watched movies
        const viewLiked = viewSaved[0];
        if (viewLiked) {
            setData(data.filter((movie) => liked.includes(movie.id)));
        }
    }, [liked]);

    // Tracks updates to watched re-render its corresponding page
    useEffect( () => {
        // Arr viewSaved: first value in array toggles liked movies, second toggles watched movies
        const viewWatched = viewSaved[1];
        if (viewWatched) {
            setData(data.filter((movie) => watched.includes(movie.id)));
        }
    }, [watched]);

    // Tracks updates to data to update cache, if needed
    useEffect( () => {
        if ((cache.length > 0) && (data.length >= cache.length)) {
            setCache(data);
        }
    }, [data])



    // Helper to gauge movie title length and condense, if needed; cutoff is 27 chars
    const condense = (title) => {
        return title.length > 27 ? title.substring(0, 26).concat("...") : title;
    }

    // Helpers to grab subheader text content
    const sortingReference = {
        'default' : '',
        'alpha' : ', sorted by Title',
        'date' : ', sorted by Most Recent',
        'rating' : ', sorted by Average Rating',
        'popularity' : ', sorted by Popularity',
    }
    const subheader = () => {
        // Arr viewSaved: first value in array toggles liked movies, second toggles watched movies
        const viewLiked = viewSaved[0];
        const viewWatched = viewSaved[1];

        if (viewLiked) return `Favorites`;
        else if (viewWatched) return `Watched`;
        else
            return searchContent ? `Showing results for "${searchContent}"${sortingReference[sortBy]}` : `Now Playing${sortingReference[sortBy]}`
    }



    return (
        <>
        { data.length > 0 && 
           // Customize the header by active search content and sorting value
            <h2>{subheader()}</h2>
        }

        {/* Arr viewSaved: first value in array toggles liked movies, second toggles watched movies */}
        { data.length == 0 && searchActive &&
            <h3>At least we tried ¯\_(ツ)_/¯ (no results)</h3>
        }

        { data.length == 0 && (viewSaved[0] || viewSaved[1]) &&
            <h3>You don't have any movies saved here!</h3>
        }

        <section id='cardList'>
            {/* Placeholders while movies are loading / there are no results */}
            { data.length == 0 && !searchActive && !(viewSaved[0] || viewSaved[1]) &&
                <p>Loading movies...</p>
            }

            {/* Maps every movie on page X into a card, note the "w200" in url to request an img width of 200px */}
            {/* Sort the data, if needed, just before mapping to Card elements */}
            { data.length > 0 &&
                sortData(data, sortBy).map(movie => {
                    return (
                        // Condense movie title if it's too long for the card (see 'condense')
                        // round vote averages to 2 decimal places
                        <Card 
                            key={movie.id} movieID={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                            cardTitle={condense(movie.title)} fullTitle={movie.title}
                            rating={parseFloat(movie.vote_average).toFixed(2)}
                            setModal={setModal} 
                            liked={liked} setLiked={setLiked} 
                            watched={watched} setWatched={setWatched}
                        />
                    )
                })
            }
        </section>

        </>
    )
}

export default CardList