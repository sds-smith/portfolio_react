import './ContactBar.css'
import { Link } from 'react-router-dom'

function ContactBar() {

    return (
        <div className='contact-info' id='contact'>
            <Link to='/contact_form' className='side-nav'>contact:</Link>
            <h5><a className='contact-link'href='mailto:sds.smith24@gmail.com' id='email'>sds.smith24@gmail.com</a></h5>
            <h5><a className='contact-link'href='https://www.linkedin.com/in/shawn-smith-3379ab13/' target='_blank'>linkedin.com/shawn-smith</a></h5>
            <h5><a className='contact-link'href='https://github.com/sds-smith' target='_blank'>github.com/sds-smith</a></h5>
            <h5><a className='contact-link'href='tel:12156305599'>215.630.5599</a></h5>                
        </div>
    );
  }
  
  export default ContactBar;
