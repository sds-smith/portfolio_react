import './Contact.css'

function Contact() {
    return (
        <div className='contact-info' id='contact'>
            <h4 className='side-nav'>contact:</h4>
            <h5><a className='contact-link'href='mailto:sds.smith24@gmail.com' id='email'>sds.smith24@gmail.com</a></h5>
            <h5><a className='contact-link'href='https://github.com/sds-smith' target='_blank'>github.com/sds-smith</a></h5>
            <h5><a className='contact-link'href='tel:12156305599'>215.630.5599</a></h5>                
        </div>
    );
  }
  
  export default Contact;
