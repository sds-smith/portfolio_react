import './Header.css'

function Header() {
    return (
        <header className='Header'>
            <nav className='topnav' id='my-topnav'>
                <ul >
                    <li className='nav-items'><a href='#' onclick="openCloseTopNav()">Home</a></li>
                    <li className='nav-items'><a href='#' onclick="openCloseTopNav()">Portfolio</a></li>
                    <li className='nav-items'><a href='#' onclick="openCloseTopNav()">About</a></li>                    
                </ul>
                <a href="javascript:void(0);" className="hamburger" onclick="openCloseTopNav()">&#9776;</a>
            </nav>
        </header>
    );
  }
  
  export default Header;




