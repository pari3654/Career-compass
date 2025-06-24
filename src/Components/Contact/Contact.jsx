import React from 'react';
import './Contact.css';
 
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bc3679a3-65bf-49af-a4e6-f7cb9f227eaa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }; 

  return (
    <div className="contact" id="Contact">
      {/* Left Side - Info */}
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Have questions, suggestions, or just want to say hello?
          We're always here to help you navigate your career journey.
          Whether it's feedback, doubts, or collaboration ideas — we're listening.
          Reach out and we'll get back to you as soon as possible!
        </p>
        <ul>
          <li><strong>Email:</strong> support@careercompass.in</li>
          <li><strong>Phone:</strong> +91 1234567890</li>
          <li><strong>Address:</strong> 401 Innovation Tower, Knowledge Park, New Delhi, India – 110001</li>
        </ul>
      </div>

      {/* Right Side - Form */}
      <div className="contact-col">
        <form onSubmit={onSubmit}> 
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />

          <label>Your Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn">Submit</button>
        </form>
        <span> {result}</span>
      </div>
    </div>
  );
};

export default Contact;
