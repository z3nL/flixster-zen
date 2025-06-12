// Returns a copy of the array of in-use movie cards, sorted by specified pattern
function sortData(data, sortBy) {
    return ([ ...data.sort((a,b) => 
        {
            switch (sortBy) {
                case 'default':
                case 'popularity':
                    return(b.popularity - a.popularity);

                case 'alpha':
                    return (a.title.localeCompare(b.title));
                    
                case 'date':
                    return (new Date(b.release_date) - new Date(a.release_date));

                case 'rating':
                    return (b.vote_average - a.vote_average);
                
                default:
                    console.error("sortData error: invalid sortBy argument");
                    return 0;
            }
        })
    ]);
}

export default sortData;