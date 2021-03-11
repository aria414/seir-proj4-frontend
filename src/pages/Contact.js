import React from "react";

const Contact = () => {
  return (
    <div className="home-content">
      <h2>Contact</h2>
      <div className="border-decor">
        <img
          src="https://svgsilh.com/svg/1584992.svg"
          alt="Decorative border"
        />
      </div>
      <div class="eform">
        <form
          accept-charset="utf-8"
          action="https://formspree.io/f/xbjppgew"
          method="post"
        >
          <label for="full-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />

          <label for="email-address">Email Address</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
          />
          <label for="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Enter message here."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />

          <input id="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
