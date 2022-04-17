import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {

    const [cards, setCards] = useState([
        <li>
            <div className='card-heading'>
                <h3>Playlist Creator</h3>
                <p>single-page web app</p>
            </div>

            <div className='card' id='atj-card'>
                <Link className='portfolio-link' id='atj' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: "https://assemblethejams.netlify.app" }} target="_blank" >Demo</Link>
                <Link className='portfolio-link rm' id='atj-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/assemble-the-jams#readme"}} target='_blank'>About</Link>  
            </div>
        </li>,

        <li>
            <div className='card-heading'>
                <h3>Word Guess Game</h3>
                <p>mobile app</p>
            </div>

            <div className='card' id='WHRDL-card'>
                <Link className='portfolio-link' id='WHRDL' style={{color: 'rgb(64, 62, 37)'}} to='/WHRDL' >Demo</Link>
                <Link className='portfolio-link rm' id='WRDL-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/whrdl#readme"}} target='_blank'>About</Link>  
            </div>
        </li>,

        <li>
            <div className='card-heading'>
                <h3>Password Generator</h3>
                <p>single-page web app</p>
            </div>

            <div className='card' id='rpg-card'>
                <Link className='portfolio-link' id='pwgen' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: "https://sds-smith.github.io/password_generator/" }} target="_blank" >Demo</Link>
                <Link className='portfolio-link rm' id='pwgen-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/password_generator#readme"}} target='_blank'>About</Link>  
            </div>
        </li>     

    ])

    const descriptions = [
        'Connect to Spotify API, search songs, create custom playlist, and save playlist to your Spotify profile.',
        'Guess the secret word in six tries.',
        'Generate random unique password and copy to clipboard'
    ]

    const advanceCarousel = () => {
        setCards([cards[cards.length-1], ...cards.slice(0, cards.length-1)])
    }

    const reverseCarousel = () => {
        setCards([...cards.slice(1), cards[0]])
    }

    useEffect(() => {
        reverseCarousel()
    },[])

    return (
        <div className='Portfolio' id='page-2'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>portfolio samples</h4>
                <div className='carousel'>
                    <button onClick={advanceCarousel}>&#10149;</button>           
                    <ul className='portfolio-list'>
                        {cards}
                    </ul>  
                    <button className='reverse-btn' onClick={reverseCarousel}>&#10150;</button>           

                </div>

        </div>
    );
  }
  
  export default Portfolio;




