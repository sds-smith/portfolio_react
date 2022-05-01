import './ContactBar.css'
import { Link } from 'react-router-dom'
import email_icon from '../../media/icons/mail_icon.png'
import linkedin_icon from '../../media/icons/linkedin_icon.png'
import github_icon from '../../media/icons/github_icon.png'
import phone_icon from '../../media/icons/phone_icon.png'
import contact_icon from '../../media/icons/contact_icon.png'

function ContactBar(props) {

    const toggleContact = () => {
        if (props.isMobile) {
            const contact = document.getElementById('contact')
            const contactButton = document.getElementById('contactMobile')
            contact.style.display = 'none'
            contactButton.style.fontWeight = 'normal'
        }
    }

    return (
        <div className='contact-info' id='contact'>
            <Link to='/contact_form' className='side-nav' onClick={toggleContact}><img src={contact_icon} alt='link to contact form' />contact:</Link>
            <div className='icon_container'>
                <h5><a className='contact-link'href='mailto:sds.smith24@gmail.com' id='email'   onClick={toggleContact}><img className='icon' src={email_icon} alt='email icon for sds.smith24@gmail.com'/></a></h5>
                <h5><a className='contact-link'href='https://www.linkedin.com/in/shawn-smith-3379ab13/' target='_blank'  rel="noreferrer" onClick={toggleContact}><img className='icon' src={linkedin_icon} alt='linkedin icon for linkedin.com/shawn-smith'/></a></h5>
                <h5><a className='contact-link'href='https://github.com/sds-smith' target='_blank' rel="noreferrer" onClick={toggleContact}><img className='icon' src={github_icon} alt='github icon for github.com/sds-smith'/></a></h5>
                <h5><a className='contact-link'href='tel:12156305599'><img className='icon' src={phone_icon} alt='phone icon for 215.630.5599'/></a></h5>    
            </div>
            
        </div>
    );
  }
  
  export default ContactBar;
