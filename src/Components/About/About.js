import './About.css'
import Portrait from '../../media/portrait.jpeg'

function About() {

    const skills = ['Responsive Web Design', 
                    'Dynamic Web Development and asyncronous code', 
                    'JavaScript Algorithms and Data Structures',
                    '   Singly and Doubly Linked Lists',
                    '   Stacks and Queues',
                    '   Hash Maps',
                    '   Trees, Heaps,',
                    '   Graphs',
                    'Object Oriented Programming',
                    'TypeScript',
                    'Front End Development Libraries:',
                    '   React.js',
                    '   Vue.js',
                    'Single-page Web Apps',
                    'Web Accessibility',
                    'Web APIs',
                    'Node.js',
                    'React Native',
                    ]

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
                        <li>{skills[0]}</li>
                        <li>{skills[1]}</li>
                        <li>{skills[2]}</li>
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