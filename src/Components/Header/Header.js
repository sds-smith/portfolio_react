import './Header.css'

function Header() {
    return (
        <header className='Header'>
            <nav className='topnav' id='my-topnav'>
                <ul className='nav-items'>
                    <li className='nav-items'><a href='index.html' onclick="openCloseTopNav()">Home</a></li>
                    <li className='nav-items'><a href='#page-2' onclick="openCloseTopNav()">Portfolio</a></li>
                    <li className='nav-items'><a href='#page-3' onclick="openCloseTopNav()">About</a></li>                    
                </ul>
                <a href="javascript:void(0);" class="icon" onclick="openCloseTopNav()">&#9776;</a>
            </nav>
        </header>
    );
  }
  
  export default Header;




