import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sbiey5i",
        "template_vhm3lfc",
        e.target,
        "user_tSO4zJrwJzQkF1DpUZCGg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contactId">
      <div className="contact__header">
        <div className="contact__icon">
          <HiMail />
        </div>
        <div className="contact__title">
          <h1>Get in touch with me.</h1>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__form">
          <form onSubmit={sendEmail}>
            <div className="contact__input">
              <p>
                Name <span className="contact__required">*</span>
              </p>
              <input type="text" placeholder="Name" name="name" required />
            </div>
            <div className="contact__input">
              <p>
                Email <span className="contact__required">*</span>
              </p>
              <input type="email" placeholder="Email" name="name" required />
            </div>
            <div className="contact__input">
              <p>Subject</p>
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="contact__input">
              <p>
                Message <span className="contact__required">*</span>
              </p>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <input type="submit" value="SUBMIT" className="contact__button" />
          </form>
        </div>
        <div className="contact__address">
          <h2>Address On Phone</h2>
          <p>Karl Nassar</p>
          <p>kgnassar01@gmail.com</p>
          <p>Zalka, Beirut</p>
          <p>Moun Lebanon, Lebanon</p>
          <p>+961 70 888 558</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
