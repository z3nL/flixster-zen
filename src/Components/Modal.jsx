// Css and asset imports
import '../Css/Modal.css'
import dooricon from '../assets/dooricon.svg'

// See ./Main for inheritance of these props
const Modal = ({modal, setModal}) => {
    if (!modal[0])
        return null;

    // modal is an array of [Boolean, Object]; we use modal[1] to ref. the info object
    const info = modal[1];
    const imgURL = `https://image.tmdb.org/t/p/w500${info.backdrop}`;

    return (
        // Clicking anywhere outside of the content box closes the modal
        <section id='modal' onClick={() => setModal([false, {}])}>
            <div className='content' onClick={(event) => event.stopPropagation()}>
                <h1 className='movieTitle'>{info.title}</h1>
                <img id='backdrop' src={imgURL} alt={`Backdrop for ${info.title}`}></img>
                <section className='technicalInfo'>
                    <p> <b>Release Date: </b>{info.releaseDate} </p>
                    <p> <b>Runtime: </b>{info.runtime} </p>
                    <p>⭐ {info.rating}</p>
                </section>
                <p className='miscInfo'> <b>Overview: </b>{info.overview} </p>
                <p className='miscInfo'> <b>Genres: </b>{info.genres} </p>
                <iframe className='trailer'
                    src={`https://www.youtube.com/embed/${info.embedKey}`}>
                </iframe>
                <br></br>
                <img id='dooricon' src={dooricon} onClick={() => setModal([false, {}])} />
            </div>
        </section>
    )
}
export default Modal;