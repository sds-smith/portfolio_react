import './About.css'
import Portrait from '../../media/portrait.jpeg'

function About() {
    return (
        <div className='About' id='page-3'>
            <div className='profile'>
                <img src={Portrait} />
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
                        <li>Responsive Web Design</li>
                        <li>Dynamic Web Development and asyncronous coding</li>
                        <li>Javascript Algorithms and Data Structures</li>
                        <li>Front End Development Libraries</li>
                            <ul>
                                <li>React.js</li>
                                <li>Vue</li>
                            </ul>
                        <li>Single-page Web Apps</li>
                        <li>Web Accessibility</li>
                        <li>Web APIs</li>
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