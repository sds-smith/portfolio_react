import './ContactBar.css'
import { Link } from 'react-router-dom'

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
            <h5><a className='contact-link'href='mailto:sds.smith24@gmail.com' id='email'   onClick={toggleContact}>sds.smith24@gmail.com</a></h5>
            <h5><a className='contact-link'href='https://www.linkedin.com/in/shawn-smith-3379ab13/' target='_blank'  onClick={toggleContact}>linkedin.com/shawn-smith</a></h5>
            <h5><a className='contact-link'href='https://github.com/sds-smith' target='_blank' onClick={toggleContact}>github.com/sds-smith</a></h5>
            <h5><a className='contact-link'href='tel:12156305599'>215.630.5599</a></h5>                
        </div>
    );
  }
  
  export default ContactBar;
