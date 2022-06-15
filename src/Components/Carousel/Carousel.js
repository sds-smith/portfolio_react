import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Projects } from '../../data/projects'

import { CardHeading, CarouselContainer, PortfolioCard, PortfolioList, Description } from './Carousel.styles'

const Carousel = () => {
    const [cards, setCards] = useState(Projects)
    const advanceCarousel = () => {
        setCards([cards[cards.length-1], ...cards.slice(0, cards.length-1)])
    }
    const reverseCarousel = () => {
        setCards([...cards.slice(1), cards[0]])
    }
    return (
        <>
            <CarouselContainer>
                <button onClick={advanceCarousel}>&#10150;</button>  {/*&#10149*/}         
                <PortfolioList>
                    { cards.slice(0, 5).map((card) => {
                        return (
                            <li key={card.id}>
                                <CardHeading>
                                    <h3>{card.heading_title}</h3>
                                    <p>{card.heading_subtitle}</p>
                                </CardHeading>
                                <PortfolioCard backgroundImage={card.background_image} >
                                    { card.video_link && <Link className='portfolio-link rm' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: card.video_link}} target='_blank'>View Demo</Link>}  
                                    <Link className='portfolio-link' style={{color: 'rgb(64, 62, 37)'}} to={{ pathname: card.live_link }} target="_blank" >Open App</Link>
                                    <Link className='portfolio-link rm' style={{color: 'rgb(217, 213, 169)'}} to={{ pathname: card.readme_link}} target='_blank'>More Info</Link>  
                                </PortfolioCard>
                            </li>
                        )
                    })
                    }
                </PortfolioList>  
                <button className='reverse-btn' onClick={reverseCarousel}>&#10150;</button>           
            </CarouselContainer>
            <Description>{cards[2].description}</Description>        
        </>
    )
}

export default Carousel