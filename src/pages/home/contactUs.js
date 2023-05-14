import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import AuthButtons from '@/components/AuthButtonsComp';

const contactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

 
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // console.log(event.target.elements.name);
    emailjs.sendForm('service_yogknkd', 'template_cyu3s5f', event.target, 'oTRpc9rMm5VwpDu1U')

    
    event.target.elements.name.value = '';
    event.target.elements.email.value = '';
    event.target.elements.message.value = '';
  };

  return (
    <>
    <AuthButtons/>
    <div style={{display:'flex', width:'100vw', height:'35px'}}><Navbar /></div>
    <section className="Contact">
      
      <div className="Content">
        <h3 className='header' style={{margin:0}}>Get in touch!</h3>
      </div>
      <div className="contact_container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
            <div className="text">
              <h3>Address</h3>
              <p>Lebanon,<br></br> Beirut</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></div>
            <div className="text">
              <h3>Phone</h3>
              <a href="tel:55555555">55 555 555</a>
            </div>
          </div>
          <div className="box">
            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="text">
              <h3>Email</h3>
              <a href="mailto:luxeMotor@gmail.com">luxeMotor@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="name" required="required" style={{color:"#000"}}></input>
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="email" required="required" style={{color:"#000"}}></input>
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" required="required" style={{color:"#000"}} rows="2"></textarea>
              <span>Leave your message...</span>
            </div>
            <div className="inputBox">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>

    </section><div><Footer /></div></>
    
  );
}
export default contactUs;