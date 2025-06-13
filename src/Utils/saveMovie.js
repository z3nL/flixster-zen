// Css and asset imports
import emptyheart from '../Components/emptyheart.png'
import shuteye from '../Components/shuteye.png'
import fullheart from '../Components/fullheart.png'
import openeye from '../Components/openeye.svg'

const saveMovie = (event, movieID, liked, setLiked, watched, setWatched ) => {
    event.stopPropagation();

    const target = event.target;
    const source = target.src.split("Components/")[1];

    const empty_heart = 'emptyheart.png';
    const full_heart = fullheart.split("Components/")[1];
    const shut_eye = 'shuteye.png';
    const open_eye = openeye.split("Components/")[1];

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