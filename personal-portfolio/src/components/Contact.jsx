// Hooks
import { useState, useRef } from "react";

// Bootstrap
import { EnvelopeAt, Telephone } from "react-bootstrap-icons";

// Emailjs
import emailjs from "emailjs-com";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [message, setMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_j7w3vay",
        "template_wgbtdfg",
        form.current,
        "T-HMAxGeiS3B1ROtW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Send Message");
          setMessage("Email Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send Message");
          setMessage("Failed to send email. Please, try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <h3>Contact Me</h3>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <EnvelopeAt size={20} className="email-icon" />
            <p>Email</p>
            <p className="ema-pho">fabiobronze.work@gmail.com</p>
            <a href="mailto:fabiobronze.work@gmail.com">Send a Message</a>
          </article>
          <article className="contact-option">
            <Telephone size={20} className="phone-icon" />
            <p>Phone Number</p>
            <p className="ema-pho">(+357) 966 255 037</p>
            <a href="https://api.whatsapp.com/send?phone=966255037">
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <textarea name="message" rows="7" placeholder="Message" required />
          <button type="submit" className="btn btn-primary">
            {buttonText}
          </button>
          {!message && <p className="danger">{message}</p>}
          {message && <p className="success">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
