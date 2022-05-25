import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {

    const [cards, setCards] = useState([
        <li>
            <div className='card-heading'>
                <h3>Assemble the Jams</h3>
                <p>React single-page web app</p>
            </div>

            <div className='card' id='atj-card'>
                <Link className='portfolio-link rm' id='atj-video' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://youtu.be/fMgUQI0HRTk"}} target='_blank'>View Demo</Link>  
                <Link className='portfolio-link' id='atj' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: "https://assemblethejams.netlify.app" }} target="_blank" >Open App</Link>
                <Link className='portfolio-link rm' id='atj-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/assemble-the-jams/blob/main/README.md"}} target='_blank'>More Info</Link>  
           
            </div>
        </li>,

        <li>
            <div className='card-heading'>
                <h3>WHRDL</h3>
                <p>React Native mobile app</p>
            </div>

            <div className='card' id='WHRDL-card'>
                <Link className='portfolio-link' id='WHRDL' style={{color: 'rgb(64, 62, 37)'}} to='/WHRDL' >Open App</Link>
                <Link className='portfolio-link rm' id='WRDL-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/whrdl/blob/master/README.md"}} target='_blank'>More Info</Link>  
            </div>
        </li>,

        <li>
            <div className='card-heading'>
                <h3>Password Generator</h3>
                <p>HTML/JS single-page web app</p>
            </div>

            <div className='card' id='rpg-card'>
                <Link className='portfolio-link' id='pwgen' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: "https://sds-smith.github.io/password_generator/" }} target="_blank" >Open App</Link>
                <Link className='portfolio-link rm' id='pwgen-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/password_generator/blob/master/README.md"}} target='_blank'>More Info</Link>  
            </div>
        </li>,

        <li>
            <div className='card-heading'>
                <h3>Weather App</h3>
                <p>Vue single-page web app</p>
            </div>

            <div className='card' id='weather-card'>
                <Link className='portfolio-link' id='weather' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: "https://sds-smith.github.io/weather/" }} target="_blank" >Open App</Link>
                <Link className='portfolio-link rm' id='weather-readme' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: "https://github.com/sds-smith/weather/blob/master/README.md"}} target='_blank'>More Info</Link>  
            </div>
        </li>  
    ])

    const [descriptions, setDescriptions] = useState([
        'Connect to your Spotify Premium account, execute searches and receive search term matches and recommendations, play/pause a song, like/ unlike songs, create custom playlist, and save playlist to your Spotify profile.',
        'Clone of a popular word game. Guess the secret word in six tries. Reset game, get hints',
        'Generate random unique password and copy to clipboard',
        'Search by City/ State/ Country, or by longitudinal coordinates, and receive up-to-the-minute weather data'
    ])

    const advanceCarousel = () => {
        setCards([cards[cards.length-1], ...cards.slice(0, cards.length-1)])
        setDescriptions([descriptions[descriptions.length-1], ...descriptions.slice(0, descriptions.length-1)])
    }

    const reverseCarousel = () => {
        setCards([...cards.slice(1), cards[0]])
        setDescriptions([...descriptions.slice(1), descriptions[0]])

    }

    // useEffect(() => {
        // reverseCarousel()
    // },[])

    return (
        <div className='Portfolio' id='page-2'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>portfolio samples</h4>
                <div className='carousel'>
                    <button onClick={advanceCarousel}>&#10150;</button>  {/*&#10149*/}         
                    <ul className='portfolio-list'>
                        {cards.slice(0, 3)}
                    </ul>  
                    <button className='reverse-btn' onClick={reverseCarousel}>&#10150;</button>           
                </div>
                <h2 className='description'>{descriptions[1]}</h2>
        </div>
    );
  }
  
  export default Portfolio;




