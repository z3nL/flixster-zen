// Css and asset imports
import '../Css/Modal.css'
import dooricon from '../assets/dooricon.svg'

const Main = ({modal, setModal}) => {
    if (!modal[0])
        return null;

    const info = modal[1];
    const imgURL = `https://image.tmdb.org/t/p/w500${info.backdrop}`;

    return (
        <section id='modal'>
            <div className='content'>
                <h1 className='movieTitle'>{info.title}</h1>
                <img id='backdrop' src={imgURL} alt={`Backdrop for ${info.title}`}></img>
                <section className='technicalInfo'>
                    <p> <b>Release Date: </b>{info.releaseDate} </p>
                    <p> <b>Runtime: </b>{info.runtime} </p>
                    <p>⭐ {info.rating}</p>
                </section>
                <p className='miscInfo'> <b>Overview: </b>{info.overview} </p>
                <p className='miscInfo'> <b>Genres: </b>{info.genres} </p>
                <img id='dooricon' src={dooricon} onClick={() => setModal([false, {}])} />
            </div>
        </section>
    )
}
export default Main;