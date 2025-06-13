// Css and asset imports

// Provided an action and movieID, manipulate liked/watched arrays accordingly
const saveMovie = (event, action, movieID, liked, setLiked, watched, setWatched ) => {
    event.stopPropagation();

    switch (action) {
        case "like":
            setLiked([...liked, movieID]);
            break;

        case "unlike":
            const likedIndex = liked.indexOf(movieID);
            setLiked(liked.toSpliced(likedIndex, 1));
            break;
        
        case "watch":
            setWatched([...watched, movieID]);
            break;

        case "unwatch":
            const watchedIndex = watched.indexOf(movieID);
            setWatched(watched.toSpliced(watchedIndex, 1));
            break;

        default:
            console.error("Invalid saveMovie action");
    }
}

export default saveMovie;