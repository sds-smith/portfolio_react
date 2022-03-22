import './About.css'

function About() {
    return (
        <div className='About' id='page-3'>
            <h1 id='name'>Shawn Smith</h1>
            <p className='hr'></p>
            <h4  id='role'>front-end web developer</h4> 
            <div className='about'>
                <div className='about-title'>
                    <h3 >About:</h3>

                </div>

                <div className='about-paragraph'>

                    <p className='about'>Metamatopoeia Productions is a boutique web development studio based in Hanover, Pennsylvania.</p>
                    <p className='about'>With capabilities in both front-end and back-end web development, as well as visual styling and design, we are eager to help you with all of your web needs.  Specialties include:</p>
                    <ul>
                        <li>Responsive Web Design</li>
                        <li>Javascript Algorithms and Data Structures</li>
                        <li>Front End Development Libraries</li>
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