import './CircleMenu.css'
import circleMenu from '../../media/circle_menu.png'
import { NavLink } from 'react-router-dom'

function CircleMenu(props) {

    return (
        <div className='circle_menu' id='circle_menu'>
            <img src={circleMenu} className='circle_icon' alt='circle menu'/>
            <div className='circle_nav' id='circle_nav'>
                <NavLink to='/' exact className='circle-nav-items'activeClassName='active' >Home</NavLink>
                <NavLink to='/portfolio' className='circle-nav-items'activeClassName='active' >Portfolio</NavLink>
                <NavLink to='/about' className='circle-nav-items'activeClassName='active' >About</NavLink>  
                <NavLink to='/contact_form' className='circle-nav-items'>Contact</NavLink>

            </div>  
        </div>
    );
  }
  
  export default CircleMenu;