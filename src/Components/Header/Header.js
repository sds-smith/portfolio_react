import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className='Header'>
            <nav className='topnav' id='my-topnav'>
                <NavLink className='nav-items' to='/'>Home</NavLink>
                <NavLink className='nav-items' to='/portfolio'>Portfolio</NavLink>
                <NavLink className='nav-items' to='/about'>About</NavLink>                    
                <a href="javascript:void(0);" className="hamburger" onclick="openCloseTopNav()">&#9776;</a>
            </nav>
        </header>
    );
  }
  
  export default Header;




