import { useState } from 'react'
import { useMediaQuery } from '../../util/customHooks'
import './ContactForm.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

function ContactForm() {

    let isMobile = useMediaQuery('(max-width: 1020px)')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const thankyou = `Thank you, ${firstName}.`
    const submitted = 'Your form has been submitted.'

    const handleSubmit = e => {
        e.preventDefault();
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
          .then(() => {
              if (isMobile) {
                  window.alert(thankyou + '\n' + submitted)
              } else {
                document.getElementById('thankyou').style.display = 'block'
                document.getElementById('submitted').style.display = 'block'

              }
        })
          .catch(error => alert(error));
          document.querySelectorAll('.input').forEach(element => element.value = '')

      };
  
    const handleChangeFirstName = e => setFirstName(e.target.value);
    const handleChangeLastName = e => setLastName(e.target.value);
    const handleChangeEmail = e => setEmail(e.target.value);
    const handleChangeMessage = e => setMessage(e.target.value);

    return (
        <div className='ContactForm' >
                <h1 id='name'>Shawn Smith</h1>
                <div className='form-container'>
                    <form className='form' onSubmit={handleSubmit} >
                        <input type='text' placeholder='Your First Name' name='first-name' value={firstName} className='input'required onChange={handleChangeFirstName}/>
                        <input type='text' placeholder='Your Last Name' name='last-name' value={lastName} className='input'required onChange={handleChangeLastName}/>
                        <input type='email' placeholder='Your Email Address' name='email' value={email} className='input'required onChange={handleChangeEmail}/>
                        <textarea placeholder='Share Your Thoughts' name='message' value={message} className='input'required onChange={handleChangeMessage}/>
                        <button type='submit' style={{color: 'rgb(217, 213, 169)'}} >SUBMIT</button>
                    </form> 
                    <div className='title'>
                        <h2>contact</h2>
                        <h3 className='success' id='thankyou'>{thankyou}</h3>
                        <h3 className='success' id='submitted'>{submitted}</h3>

                    </div>
                </div> 
        </div>
    );
  }
  
  export default ContactForm;
