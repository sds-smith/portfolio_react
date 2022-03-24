
import './ContactForm.css'

function ContactForm() {

    return (
        <div className='ContactForm' >
            <div className='centered-me'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>contact</h4>
                <form className='form' >
                    <input type='text' placeholder='Your First Name' required />
                    <input type='text' placeholder='Your Last Name' required />
                    <input type='email' placeholder='Your Email Address' required />
                    <inpout type='tel' placeholder='Your Telephone Number' />
                    <textarea placeholder='Comments' />
                    <button type='submit'>SUBMIT</button>
                </form> 
            </div> 
            
        </div>
    );
  }
  
  export default ContactForm;
