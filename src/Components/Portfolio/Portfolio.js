import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Portfolio.scss'
import { Projects } from '../../data/projects'

function Portfolio() {

    const [cards, setCards] = useState(Projects)

    const advanceCarousel = () => {
        setCards([cards[cards.length-1], ...cards.slice(0, cards.length-1)])
    }

    const reverseCarousel = () => {
        setCards([...cards.slice(1), cards[0]])
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
                        { cards.slice(0, 5).map((card) => {
                            return (
                                <li key={card.id}>
                                    <div className='card-heading'>
                                        <h3>{card.heading_title}</h3>
                                        <p>{card.heading_subtitle}</p>
                                    </div>
                                
                                    <div className='card' id={card.id}>
                                        { card.video_link && <Link className='portfolio-link rm' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: card.video_link}} target='_blank'>View Demo</Link>}  
                                        <Link className='portfolio-link' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: card.live_link }} target="_blank" >Open App</Link>
                                        <Link className='portfolio-link rm' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: card.readme_link}} target='_blank'>More Info</Link>  
                                    </div>
                                </li>
                            )
                        })
                        }

                    </ul>  
                    <button className='reverse-btn' onClick={reverseCarousel}>&#10150;</button>           
                </div>
                <h2 className='description'>{cards[2].description}</h2>
        </div>
    );
  }
  
  export default Portfolio;




