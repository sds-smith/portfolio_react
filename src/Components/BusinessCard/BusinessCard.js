import { Link } from 'react-router-dom'
import './BusinessCard.css'

function BusinessCard() {
    return (
        <div className='BusinessCard' >
            <div className='centered-me'>
                <Link to='/about' className='link'>Shawn Smith</Link>            
                <p className='hr'></p>
                <h4  id='role'>web and mobile developer</h4>
            </div>
                
        </div>
    );
  }
  
  export default BusinessCard;