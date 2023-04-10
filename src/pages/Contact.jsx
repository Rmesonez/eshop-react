// import { useRef } from "react";
import Card from "../components/Card";
import './Contact.css'
import { FaPhoneAlt, FaEnvelope, FaGithub } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
// import emailjs from "@emailjs/browser";
// import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div>
    <div className='contact-container'>
      <h2>Contact Us</h2>
      <div className='section-contact'>
        <form 
        className="contact-form"
        // ref={form} 
        // onSubmit={sendEmail}
        >
          <Card cardClass='contact-card'>
            <div className="card-contact">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <label>Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <button className="btn contact-button">Send Message</button>
            </div>
          </Card>
        </form>

        <div className='contact-details'>
          <Card cardClass='card2'>
            <div className="contact-social">
            <h3>Our Contact Information</h3>
            <p>Fill the form or contact us via other channels listed below</p>
            <div className='icons'>
              <span>
                <FaPhoneAlt />
                <p>+502 54135883</p>
              </span>
              <span>
                <FaEnvelope />
                <p>rmesonez@gmail.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Quetzaltenango, Guatemala</p>
              </span>
              <span>
                <FaGithub />
                <p>https://github.com/Rmesonez</p>
              </span>
            </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
