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
        <>
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

                    <p >After working most of my adult life in the restaurant industry, in 2021 I decided a career change was in order, and with the support of my wife and family, I set myself down the path toward a career in Web and Mobile Development.</p>
                    <p>From my experience as a multi-unit restaurant leader, I bring soft skills like strong communication, collaboration, relationship-building, partnering and mentoring.  I bring over a decade of experience iterating, prototyping, and scaling an ever-changing operational model.</p>    
                    <p>From my ongoing studies in Web and Mobile Development, I have attained valuable technical skills, including:</p>    
                        <ul>
                            <li>Responsive Web Design with HTML5 and CSS3</li>                        
                            <li>Interactive Web Development with Javascript</li>                        
                            <li>Web APIs and Asynchronous Request Handling</li>                        
                            <li>Javascript Algorithms and Data Structures</li>                        
                            <li>Object-oriented and Functional Programming</li>                        
                            <li>Single-page Web Apps with React.js</li>                        
                            <li>Mobile Apps with React Native</li>                        
                            <li>Git and GitHub</li>                        
                            <li>Web Accessibility</li>                        
                            <li>oAuth 2.0 Authentication</li>                        
                            <li>Search Engine Optimization</li>                        
                        </ul>
                <p>I recently attained a score of 725 on the General Coding Assessment administered by CodeSignal (815 on the practice test), and completed the Front End Engineer certification from Codecademy.
                        I\’m driven by the desire to be better today than yesterday, better tomorrow than today. I love to solve problems and I thrive in a fast-paced work environment.  
                    </p>
                    {/* <ul> */}
                        {/* <li>{skills[0][1]}</li> */}
                        {/* <li>{skills[1][1]}</li> */}
                        {/* <li>{skills[2][1]}</li> */}
                        {/* <li>{skills[3][1]}</li> */}
                        {/* <li>{skills[4][1]}</li> */}
                        {/* <li>{skills[5][1]}</li> */}
                        {/* <li>{skills[6][1]}</li> */}
                    {/* </ul> */}
                </div>
            </div>               
        </div>
        <div className='Resume'>

        </div>        
        </>

    );
  }
  
  export default About;