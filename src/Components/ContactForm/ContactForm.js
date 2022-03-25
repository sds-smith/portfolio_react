import { useState } from 'react'
import './ContactForm.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

function ContactForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 
                        "form-name": "contact", 
                        "first-name": firstName,
                        "last-name": lastName,
                        "email": email,
                        "message": message
                     })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
    const handleChangeFirstName = e => setFirstName(e.target.value);
    const handleChangeLastName = e => setLastName(e.target.value);
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangeMessage = e => setMessage(e.target.value);

    return (
        <div className='ContactForm' >
            <div className='centered-me'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>contact</h4>
                <form className='form' onSubmit={handleSubmit} >
                    <input type='text' placeholder='Your First Name' name='first-name' value={firstName} required onChange={handleChangeFirstName}/>
                    <input type='text' placeholder='Your Last Name' name='last-name' value={lastName} required onChange={handleChangeLastName}/>
                    <input type='email' placeholder='Your Email Address' name='email' value={email} required onChange={handleChangeEmail}/>
                    <textarea placeholder='Comments' name='message' value={message} required onChange={handleChangeMessage}/>
                    <button type='submit'>SUBMIT</button>
                </form> 
            </div> 
            
        </div>
    );
  }
  
  export default ContactForm;
