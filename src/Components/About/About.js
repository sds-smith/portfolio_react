import { useState, useEffect  } from 'react';
import './About.css'
import Portrait from '../../media/portrait.jpeg'

function About() {

    const [skills, setSkills] = useState([
                    ['li', 'Responsive Web Design'], 
                    ['li', 'Dynamic Web Development and asynchronous code'], 
                    ['li', 'JavaScript Algorithms and Data Structures'],
                    ['li', 'Singly and Doubly Linked Lists'],
                    ['li', 'Stacks and Queues'],
                    ['li', 'Hash Maps'],
                    ['li', 'Trees, Heaps,'],
                    ['li', 'Graphs'],
                    ['li', 'Object Oriented Programming'],
                    ['li', 'TypeScript'],
                    ['li', 'Front End Development Libraries:'],
                    ['li', 'React.js'],
                    ['li', 'Vue.js'],
                    ['li', 'Single-page Web Apps'],
                    ['li', 'Web Accessibility'],
                    ['li', 'Web APIs'],
                    ['li', 'Node.js'],
                    ['li', 'React Native'],
                    ])
        
    useEffect(() => {

        const interval = setInterval(() => {
          setSkills([...skills.slice(1), skills[0]])
        }, 2000);
        return () => clearInterval(interval);
    }, [skills]); 

    return (
        <div className='About' id='page-3'>
            <div className='profile'>
                <img src={Portrait} alt='handsome headshot'/>
                <div className='name-title'>
                    <h1 id='name'>Shawn Smith</h1>
                    <p className='hr'></p>
                    <h4  id='role'>front-end web developer</h4> 
                </div>
            </div>

            <div className='about-section'>
                <div className='about-title'>
                    <h3 >About:</h3>

                </div>

                <div className='about-paragraph'>

                    <p >After working most of my adult life in the restaurant industry, in 2021 I decided a career change was in order.</p>
                    <p >With the support of my wife and family, I set myself down the path toward certification in Web Development.</p>
                    <p >From my experience as a multi-unit restaurant leader, I bring soft skills like strong communication, collaboration, relationship-building.</p>
                    <p >From my studies in Web Development, I have attained valuable technical skills, including:</p>
                    <ul>
                        <li>{skills[0][1]}</li>
                        <li>{skills[1][1]}</li>
                        <li>{skills[2][1]}</li>
                        <li>{skills[3][1]}</li>
                        <li>{skills[4][1]}</li>
                        <li>{skills[5][1]}</li>
                        <li>{skills[6][1]}</li>
                    </ul>

                </div>
                {/* <ul className='specialize'> */}
                    {/* <li><img src={'media/HTML5_logo_black.svg.png'}></li> */}
                    {/* <li><img src='media/css3-logo-black-and-white.png'></li> */}
                    {/* <li><img src='media/cib-javascript.png'></li> */}
                    {/* <li><img src='media/chrome-devtools-16x9_720.png'></li> */}
                    {/* <li><img src='media/images.png'></li> */}
                    {/* <li><img src='media/download.png'></li> */}
                {/* </ul> */}
            </div>               
        </div>
    );
  }
  
  export default About;