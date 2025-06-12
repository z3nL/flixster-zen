// Functionality and Component imports

// Css and asset imports
import '../Css/Footer.css'
import tmdb from '../assets/TMDBLogo.svg'

const Footer = () => {
  return (
    <footer>
        <h3>Zen L // CodePath2025</h3>
        <a href='https://www.themoviedb.org/'>
          <img src={tmdb} alt='TMDB logo'/>
        </a>
    </footer>
  )
}

export default Footer
