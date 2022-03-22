import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='topnav' id='my-topnav'>
                <NavLink to='/' exact className='nav-items'>Home</NavLink>
                <NavLink to='/portfolio' className='nav-items'>Portfolio</NavLink>
                <NavLink to='/about' className='nav-items'>About</NavLink>                    
                <a href="javascript:void(0);" className="hamburger" onclick="openCloseTopNav()">&#9776;</a>
            </div>
        </div>
    );
  }
  
  export default Header;




