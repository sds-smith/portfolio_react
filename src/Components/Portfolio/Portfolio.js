import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className='Portfolio' id='page-2'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>portfolio samples</h4>
                <ul className='portfolio-list'>
                    <li>
                        <h3>Playlist Creator</h3>
                        <div className='card' id='atj-card'>
                            <Link className='portfolio-link' id='atj' to={{ pathname: "https://assemblethejams.netlify.app" }} target="_blank" >Demo</Link>
                            <Link className='portfolio-link rm' id='atj-readme' to={{ pathname: "https://github.com/sds-smith/assemble-the-jams#readme"}} target='_blank'>About</Link>  
                        </div>
                        <p className='description'>Connect to Spotify API, search...{/* songs, create custom playlist, and save playlist to your Spotify profile.*/}</p>
                    </li><br/>   
                    <li>
                        <h3>Password Generator</h3>
                        <div className='card' id='rpg-card'>
                            <Link className='portfolio-link' id='pwgen' to={{ pathname: "https://sds-smith.github.io/password_generator/" }} target="_blank" >Demo</Link>
                            {/* <span className='divider'>|</span> */}
                            <Link className='portfolio-link rm' id='pwgen-readme' to={{ pathname: "https://github.com/sds-smith/password_generator#readme"}} target='_blank'>About</Link>  
                        </div>
                         <p className='description'>Generate random unique password and{/* copy to clipboard*/}</p>
                    </li> 
                </ul>             
        </div>
    );
  }
  
  export default Portfolio;




