import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {

    const [navVisible, setNavVisible] = useState(false)
    const [contactBar, setContactBar] = useState(false)

    const toggleNav = () => {
        let navBar = document.getElementById('NavBar')
        let hamburger = document.getElementById('hamburger')
        if (!navVisible) {
            navBar.style.display = 'flex'
            hamburger.innerHTML = 'x'
            hamburger.style.fontSize = '25px'
        } else {
            navBar.style.display = 'none'
            hamburger.innerHTML = '&#9776;'
            hamburger.style.fontSize = '50px'
        }
        setNavVisible(!navVisible)
    }

    const toggleContact = () => {
        const contact = document.getElementById('contact')
        const contactButton = document.getElementById('contactMobile')
        if (!contactBar) {
            contact.style.display = 'flex'
            contactButton.style.fontWeight = 'bold'
        } else {
            contact.style.display = 'none'
            contactButton.fontWeight = 'normal'
        }
        setContactBar(!contactBar)
    }

    return (
        <div className='Header'>
            <div className='topnav' id='my-topnav'>
                <div className='NavBar' id='NavBar'>
                    <NavLink to='/' exact className='nav-items'activeClassName='active' >Home</NavLink>
                    <NavLink to='/portfolio' className='nav-items'activeClassName='active' >Portfolio</NavLink>
                    <NavLink to='/about' className='nav-items'activeClassName='active' >About</NavLink>  
                    <button className='nav-items contactMobile' activeClassName='active' id='contactMobile' onClick={toggleContact}>Contact</button> 
                </div>      
                <button className="hamburger" id='hamburger' onClick={toggleNav}>&#9776;</button>          
            </div>
        </div>
    );
  }
  
  export default Header;





