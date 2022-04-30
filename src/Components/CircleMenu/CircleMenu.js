import './CircleMenu.css'
import { Link } from 'react-router-dom'
import email_icon from '../../media/email_icon.png'
import linkedin_icon from '../../media/linkedin_icon.png'
import github_icon from '../../media/github_icon.png'
import phone_icon from '../../media/phone_icon.png'
import circleMenu from '../../media/circle_menu.png'

function CircleMenu(props) {

    const toggleContact = () => {
        if (props.isMobile) {
            const contact = document.getElementById('contact')
            const contactButton = document.getElementById('contactMobile')
            contact.style.display = 'none'
            contactButton.style.fontWeight = 'normal'
        }
    }

    return (
        <div className='circle_menu' id='circle_menu'>
            <img src={circleMenu} alt=''/>
        </div>
    );
  }
  
  export default CircleMenu;