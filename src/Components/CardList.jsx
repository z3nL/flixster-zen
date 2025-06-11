// Functionality and Component imports
import { useState, useEffect } from 'react'
// TODO fetchData is deprecated and effectively moved into cardList until a solution is found
import fetchData from '../Utils/fetchData.js'
import Card from './Card'

// Css and asset imports
import '../Css/CardList.css'

const CardList = ({data, setData, searchContent, searchActive, setSearchActive, pageNum}) => {

    // TODO Much more comments needed regarding searchActive

    // Tracks if the current TMDB Now Playing page # changes and appends more movie cards as such
    useEffect( () => {
        
        // Set TMDB fetch options (see TODO on line 3 as to why this is here)
        const accessToken = import.meta.env.VITE_API_ACCESS_TOKEN
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
        };

        // TODO convert to arrow function for readability
        let url = "";

        // Adjust fetch url according to existing search content
        if (searchContent || searchActive) {
            const args = !searchActive ? searchContent.split(" ").join("%20") : searchContent;
            url = `https://api.themoviedb.org/3/search/movie?query=${args}&language=en-US&page=${pageNum}`;
        } else {
            console.log("no query to search by");
            url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`;
        }

        // Fetch data and store/append in/to data
        fetch(url, options)
            .then((res) => res.json())
            .then((page) => {

                // Display only search results; If there is no search, then just append to data as normal
                if (searchContent && !searchActive) {
                    setData([...page.results]);
                    setSearchActive(true);
                } else {
                    setData([...data, ...page.results]);
                }
                
            } )
            .catch((error) => console.log('Error fetching movie data: ', error))

    }, [pageNum, searchContent]);



    return (
        <section id='cardList'>
            {/* Placeholder while movies load */}
            { !data &&
                <p>Loading movies...</p>
            }

            {/* Maps every movie on page X into a card, note the "w200" in url to request an img width of 200px */}
            { data &&
                data.map(movie => {
                    return (
                        //{/* TODO condense movie title past certain length */}
                        <Card key={movie.id} poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                        title={movie.title} rating={parseFloat(movie.vote_average).toFixed(2)} />
                    )
                })
            }
        </section>
    )
}

export default CardList