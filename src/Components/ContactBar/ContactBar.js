import './ContactBar.css'
import { Link } from 'react-router-dom'
import email_icon from '../../media/email_icon.png'
import linkedin_icon from '../../media/linkedin_icon.png'
import github_icon from '../../media/github_icon.png'
import phone_icon from '../../media/phone_icon.png'

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
            <Link to='/contact_form' className='side-nav' onClick={toggleContact}>contact:</Link>
            <h5><a className='contact-link'href='mailto:sds.smith24@gmail.com' id='email'   onClick={toggleContact}><span>sds.smith24@gmail.com</span><img className='icon' src={email_icon} alt='email icon for sds.smith24@gmail.com'/></a></h5>
            <h5><a className='contact-link'href='https://www.linkedin.com/in/shawn-smith-3379ab13/' target='_blank'  rel="noreferrer" onClick={toggleContact}><span>linkedin.com/shawn-smith</span><img className='icon' src={linkedin_icon} alt='linkedin icon for linkedin.com/shawn-smith'/></a></h5>
            <h5><a className='contact-link'href='https://github.com/sds-smith' target='_blank' rel="noreferrer" onClick={toggleContact}><span>github.com/sds-smith</span><img className='icon' src={github_icon} alt='github icon for github.com/sds-smith'/></a></h5>
            <h5><a className='contact-link'href='tel:12156305599'><span>215.630.5599</span><img className='icon' src={phone_icon} alt='phone icon for 215.630.5599'/></a></h5>                
        </div>
    );
  }
  
  export default ContactBar;
