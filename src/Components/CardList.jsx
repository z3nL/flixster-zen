// Functionality and Component imports
import { useState, useEffect } from 'react'
import fetchData from '../Utils/fetchData.js'
import optionsForFetch from '../Utils/optionsForFetch.js'
import sortData from '../Utils/sortData'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

const CardList = ({data, setData, searchContent, searchActive, setSearchActive, pageNum, sortBy, modal, setModal}) => {
    
    // Tracks if the current TMDB Now Playing page # changes and appends more movie cards as such
    useEffect( () => {
        fetchData(searchContent, searchActive, pageNum, data, setData, setSearchActive);
    }, [pageNum, searchContent]);

    // Tracks if sortBy value has been changed and sorts data accordingly; Incoming data gets sorted, too
    useEffect( () => { 
        if (sortBy === 'default') return;
        setData(sortData(data, sortBy));

    }, [sortBy]);

    // Helper to gauge movie title length and condense, if needed; cutoff is 27 chars
    const condense = (title) => {
        return title.length > 27 ? title.substring(0, 26).concat("...") : title;
    }

    return (
        <section id='cardList'>
            {/* Placeholder while movies load */}
            { !data && !searchActive &&
                <p>Loading movies...</p>
            }

            { !data && searchActive &&
                <p>TMDB has many movies, but not that one short film you made with your college buddies (no results)</p>
            }

            {/* Maps every movie on page X into a card, note the "w200" in url to request an img width of 200px */}

            {/* If a sorting filter is active, sort the data just before mapping to Card elements */}
            { data && !(sortBy === 'default') &&
                sortData(data, sortBy).map(movie => {
                    return (
                        // Condense movie title if it's too long (see 'condense'), round vote averages to 2 decimal places
                        // Pass extra info to be used in the modal
                        <Card key={movie.id} movieID={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        title={condense(movie.title)} rating={parseFloat(movie.vote_average).toFixed(2)}
                        setModal={setModal} />
                    )
                })
            }

            {/* Otherwise, map as normal */}
            { data && sortBy === 'default' &&
                data.map(movie => {
                    return (
                        // Condense movie title if it's longer than 27 characters, round vote averages to 2 decimal places
                        <Card key={movie.id} movieID={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        title={condense(movie.title)} rating={parseFloat(movie.vote_average).toFixed(2)}
                        setModal={setModal} />
                    )
                })
            }
        </section>
    )
}

export default CardList