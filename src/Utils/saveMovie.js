// Css and asset imports
import emptyheart from '../assets/hearticon.png'
import shuteye from '../assets/shuteye.png'
import fullheart from '../assets/fullheart.png'
import openeye from '../assets/openeye.svg'

const saveMovie = (event, movieID, liked, setLiked, watched, setWatched ) => {
    event.stopPropagation();

    const target = event.target;
    const source = target.src.split("assets/")[1];

    const empty_heart = 'hearticon.png';
    const full_heart = fullheart.split("assets/")[1];
    const shut_eye = 'shuteye.png';
    const open_eye = openeye.split("assets/")[1];

    switch (source) {
        case empty_heart:
            target.src = fullheart;
            setLiked([...liked, movieID]);
            break;

        case full_heart:
            target.src = emptyheart;
            const likedIndex = liked.indexOf(movieID);
            setLiked(liked.toSpliced(likedIndex, 1));
            break;
        
        case shut_eye:
            target.src = openeye;
            setWatched([...watched, movieID]);
            break;

        case open_eye:
            target.src = shuteye;
            const watchedIndex = watched.indexOf(movieID);
            setWatched(watched.toSpliced(watchedIndex, 1));
            break;

        default:
            console.error("Invalid icon image source info");
    }
}

export default saveMovie;