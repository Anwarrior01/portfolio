import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail1"></span>
        Contact me
      </h1>
      <p className="sub-title">Contact me for more information</p>

      <div className="flex">
        <form action="">
          <div>
            <label htmlFor="email">Email Address : </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="msg">Your Message : </label>
            <textarea name="msg" id="msg" required></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="contact-animation border"></div>
      </div>
    </section>
  );
}
