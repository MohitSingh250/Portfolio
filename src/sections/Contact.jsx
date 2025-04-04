import React from 'react';
import "./Contact.css"
const Contact = React.forwardRef((props, ref) => {
  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="section-header">
        <h2>Contact Me</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p className="contact-text">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"><img src="https://static.vecteezy.com/system/resources/previews/000/552/683/non_2x/geo-location-pin-vector-icon.jpg" alt="location" /></i>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Mathura, UP, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"><img src="https://purepng.com/public/uploads/large/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr.png" alt="mail" /></i>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>mscrick01@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"><img src="https://icons.veryicon.com/png/o/miscellaneous/template-4/telephone-contact-1.png" alt="contact" /></i>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91-9756812554</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/MohitSingh250" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohit-singh-441630323/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <span className="submit-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;