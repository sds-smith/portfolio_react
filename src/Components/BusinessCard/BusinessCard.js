import { Link } from 'react-router-dom'
import './BusinessCard.css'

function BusinessCard() {
    return (
        <div className='BusinessCard' >
            <Link to='/about' className='link'>Shawn Smith</Link>            
            <p className='hr'></p>
            <h4  id='role'>front-end web developer</h4>                
        </div>
    );
  }
  
  export default BusinessCard;