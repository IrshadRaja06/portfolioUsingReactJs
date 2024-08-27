import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3u44gcc', 'template_j7h5usq', form.current, 'Tpvo9CHa_w7g_YQG3')
      .then((result) => {
          console.log(result.text);
          console.log('Your message has been sent successfully!');
      }, (error) => {
          console.log(error.text);
          console.log('Failed to send your message, please try again later.');
      });

    e.target.reset();
  };

  return (
    <div className='position-fixed px-3'>
      <h1 className='pt-5'>Contact Me</h1>
      <p>I’d love to hear from you! Whether you have a question or just want to say hi, feel free to drop me a message below.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="from_name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="from_email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
