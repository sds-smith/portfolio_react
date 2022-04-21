import { useState, useEffect  } from 'react';
import './About.css'
import Portrait from '../../media/portrait.jpeg'
import Resume from '../../media/Shawn_Smith_resume_04202022.png'

function About() {

    const [skills, setSkills] = useState([
                    'Responsive Web Design with HTML5 and CSS3', 
                    'Interactive Web Development with Javascript', 
                    'Web APIs and Asynchronous Request Handling',
                    'Javascript Algorithms and Data Structures',
                    'Object-oriented and Functional Programming',
                    'Single-page Web Apps with React.js',
                    'Mobile Apps with React Native',
                    'Git and GitHub',
                    'Web Accessibility',
                    'oAuth 2.0 Authentication',
                    'Search Engine Optimization'
                    ])
    const [scrollerInterval, setScrollerInterval] = useState(2000)


    
    useEffect(() => {
        const interval = setInterval(() => {
            setSkills([...skills.slice(1), skills[0]])
          }, scrollerInterval);
        return () => clearInterval(interval);
    }, [scrollerInterval, skills]); 

 
    useEffect(() => {
        if (scrollerInterval % 10 === 0) {
            setSkills(skills => [...skills.slice(1), skills[0]])
        }
    },[scrollerInterval])

    const slideAction = (e) => {
        setScrollerInterval(e.target.value)
    }

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


                <div className='about-paragraph'>

                    <p >After working most of my adult life in the restaurant industry, in 2021 I decided a career change was in order, and with the support of my wife and family, I set myself down the path toward a career in Web and Mobile Development.</p>
                    <p>From my experience as a multi-unit restaurant leader, I bring soft skills like strong communication, collaboration, relationship-building, partnering and mentoring.  I bring over a decade of experience iterating, prototyping, and scaling an ever-changing operational model.</p>    
                    <p>From my ongoing studies in Web and Mobile Development, I have attained valuable technical skills, including:</p>    
                    <div className='skills-scroller'>
                        <input type='range' className='slider' min={50} max={2000} step={1} value={scrollerInterval} onChange={slideAction} ></input>
                        <ul>
                            <li>{skills[0]}</li>
                            <li>{skills[1]}</li>
                            <li>{skills[2]}</li>
                            <li>{skills[3]}</li>
                            <li>{skills[4]}</li>
                            <li>{skills[5]}</li>
                            <li>{skills[6]}</li>
                        </ul>
                    </div>

                <p>I recently attained a score of 725 on the General Coding Assessment administered by CodeSignal (815 on the practice test), and completed the Front End Engineer certification from Codecademy.
                        I am driven by the desire to be better today than yesterday, better tomorrow than today, and by the belief that the moment we stop learning, we stop living. I love to solve problems and I thrive in a fast-paced work environment.  
                    </p>

                    <img src={Resume} className='Resume' alt='Shawn Smith Resume'/>
                </div>
            </div>               
        </div>
    );
  }
  
  export default About;