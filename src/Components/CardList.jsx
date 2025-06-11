// Functionality and Component imports
import { useState, useEffect } from 'react'
// import fetchData from '../Utils/fetchData.js' TODO Fix fetchData
import sortData from '../Utils/sortData'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

const CardList = ({data, setData, searchContent, searchActive, setSearchActive, pageNum, sortBy}) => {

    // TODO fetchData.js is deprecated and housed in this useEffect until a solution is found
    // Tracks if the current TMDB Now Playing page # changes and appends more movie cards as such
    useEffect( () => {
        // Set TMDB fetch options
        const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
        };

        // Decide on the url for data fetching
        const url = (searchContent, searchActive) => {

            // Is there a new query or search active? Pass the new query / preserved one as an argument
            if (searchContent || searchActive) {
                const args = !searchActive ? searchContent.split(" ").join("%20") : searchContent;
                return `https://api.themoviedb.org/3/search/movie?query=${args}&language=en-US&page=${pageNum}`;

            // Otherwise, just query Now Playing
            } else {
                return `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`;
            }
        }

        // Fetch and store data
        fetch(url(searchContent, searchActive), options)
            .then((res) => res.json())
            .then((page) => {

                // If a new search is initialized, display only the first page of the search results
                if (searchContent && !searchActive) {
                    setData([...page.results]);
                    setSearchActive(true);
                
                // Otherwise, either a search is already active or we're just loading Now Playing.
                // We are okay to append the content of page X to the existing data (where if it's empty, we append page 1 to start)
                } else {
                    setData([...data, ...page.results]);
                }
            })
            .catch((error) => console.log('Error fetching movie data: ', error))
        
    }, [pageNum, searchContent]);

    // Tracks if sortBy value has been changed and sorts data accordingly; Incoming data gets sorted, too
    useEffect( () => { 
        if (sortBy === 'default') {
            return
        }
        setData(sortData(data, sortBy));

    }, [sortBy]);

    // Small helper to gauge movie title length and condense, if needed
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
                        // Condense movie title if it's longer than 27 characters, round vote averages to 2 decimal places
                        <Card key={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        title={condense(movie.title)} rating={parseFloat(movie.vote_average).toFixed(2)} />
                    )
                })
            }

            {/* Otherwise, map as normal */}
            { data && sortBy === 'default' &&
                data.map(movie => {
                    return (
                        // Condense movie title if it's longer than 27 characters, round vote averages to 2 decimal places
                        <Card key={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        title={condense(movie.title)} rating={parseFloat(movie.vote_average).toFixed(2)} />
                    )
                })
            }
        </section>
    )
}

export default CardList