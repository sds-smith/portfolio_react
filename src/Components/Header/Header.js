import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {

    const toggleNav = () => {
        let navBar = document.getElementById('NavBar')
        let hamburger = document.getElementById('hamburger')
        console.log(navBar.style.display)
        if (navBar.style.display === 'none') {
            navBar.style.display = 'flex'
            hamburger.innerHTML = 'x'
            hamburger.style.fontSize = '25px'
        } else {
            navBar.style.display = 'none'
            hamburger.innerHTML = '&#9776;'
            hamburger.style.fontSize = '50px'
        }
    }

    const toggleContact = () => {
        const contact = document.getElementById('contact')
        const contactButton = document.getElementById('contactMobile')
        if (contact.style.display === 'none') {
            contact.style.display = 'flex'
            contactButton.style.fontWeight = 'bold'
        } else {
            contact.style.display = 'none'
            contactButton.style.fontWeight = 'normal'
        }
    }

    return (
        <div className='Header'>
            <div className='topnav' id='my-topnav'>
                <div className='NavBar' id='NavBar'>
                    <NavLink to='/' exact className='nav-items'>Home</NavLink>
                    <NavLink to='/portfolio' className='nav-items'>Portfolio</NavLink>
                    <NavLink to='/about' className='nav-items'>About</NavLink>  
                    <button className='nav-items contactMobile' id='contactMobile' onClick={toggleContact}>Contact</button> 
                </div>      
                <button className="hamburger" id='hamburger' onClick={toggleNav}>&#9776;</button>          
            </div>
        </div>
    );
  }
  
  export default Header;




