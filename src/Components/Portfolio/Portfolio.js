import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
    return (
        <div className='Portfolio' id='page-2'>
            <h1 id='name'>Shawn Smith</h1>
            <p className='hr'></p>
            <h4 id='role'>portfolio samples</h4>
            <ul className='portfolio-list'>
                <li>
                    <Link className='portfolio-link' id='atj' to={{ pathname: "https://assemblethejams.netlify.app" }} target="_blank" >Assemble<span>the</span>Jams</Link>
                    <span>     |     </span>
                    <Link className='portfolio-link' id='atj-readme' to={{ pathname: "https://github.com/sds-smith/assemble-the-jams#readme"}} target='_blank'>    (README.md)</Link>  
                </li>    
            </ul>               
        </div>
    );
  }
  
  export default Portfolio;




