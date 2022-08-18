
import 'animate.css';
import {MdOutlineEmail} from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'
import emailjs from 'emailjs-com'
import { useRef } from 'react';
export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_fo4mmny', 'template_qpz9cgk', form.current, 'YNYqbX1ue4T74kJOb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  
  return (
    <section className="contact" id="connect">
      <div className="txt">
       <h4>Get in Touch</h4>
        <h2>Contect Me</h2>
        </div>

        <div className='container contact__container'>
          <div className="contact__options">

            <article className='contact__option '  >
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>samiasad.007
                @gmail.com</h5>
              
            </article>

       

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+923103326990</h5>
             
            </article>

          </div>


          <form ref={form} onSubmit={sendEmail}>
            < input type="text"  name='name' placeholder='Your full name'  required/>
            < input type="email" name="email" placeholder="Your Emial " required/>
            <textarea name='message' rows="7" placeholder='Your message' required></textarea>
            <div class="login-box">
              <button className="submitbtn">Submit</button>

            </div>
          </form>
        </div>
    </section>
  )
}
