import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import blueContact from "../../animation/contact-blue.json";
import yellowContact from "../../animation/contact-yellow.json";

export default function Contact({mode}) {
  const [state, handleSubmit] = useForm("xzzbeovr");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail1"></span>
        Contact me
      </h1>
      <p className="sub-title">Contact me for more information</p>

      <div
        className="flex "
        style={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address : </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              color="red"
              style={{ color: "orange" }}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message : </label>
            <textarea name="message" id="msg" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              color="red"
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <h1
              style={{
                marginTop: "2rem",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                fontSize: "1.6rem",
              }}
            >
              <Lottie
                loop={2}
                style={{ width: "4rem" }}
                animationData={doneAnimation}
              />
              Thanks for joining!
            </h1>
          )}
        </form>
        <div className="contact-animation">
          <Lottie
            className="contact-animation"
            style={{
              width: "32rem",
              overflow: "hidden",
              height: "24rem",
              alignSelf: "start",
            }}
            animationData={mode === "dark" ? yellowContact : blueContact}
          />
        </div>
      </div>
    </section>
  );
}
