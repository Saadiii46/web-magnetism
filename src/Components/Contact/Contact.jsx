import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3>Let’s Talk About Your Project</h3>
        <p>
          Do you have a project in mind, that you feel our approach would work well for?
          We’re always happy to discuss your project with you and put together a free proposal.
        </p>
      </div>
      <div className="contact-form">
        <h4>Just fill out the form below to get started.</h4>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="company" placeholder="Company" />
          <input type="tel" name="phone" placeholder="Phone number" />
          <input type="file" name="file" />
          <textarea name="message" rows="4" placeholder="Message" required></textarea>
          <div className="checkbox-container">
            <input type="checkbox" required />
            <label>
              I agree to have my information stored <a href="#">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="submit-button">Send your message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
