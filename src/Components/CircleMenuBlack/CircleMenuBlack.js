import './CircleMenuBlack.css'
import circleMenuBlack from '../../media/circle_menu_brown.png'
import { NavLink } from 'react-router-dom'

function CircleMenuBlack(props) {


    return (
        <div className='circle_menu' id='circle_menu'>
            <img src={circleMenuBlack} className='circle_icon' alt='circle menu'/>
            <div className='circle_nav' id='circle_nav'>
                <NavLink to='/' exact className='circle-nav-items-black'activeClassName='active' >Home</NavLink>
                <NavLink to='/portfolio' className='circle-nav-items-black'activeClassName='active' >Portfolio</NavLink>
                <NavLink to='/about' className='circle-nav-items-black'activeClassName='active' >About</NavLink>  
                <NavLink to='/contact_form' className='circle-nav-items-black'>Contact</NavLink>

            </div>  
        </div>
    );
  }
  
  export default CircleMenuBlack;