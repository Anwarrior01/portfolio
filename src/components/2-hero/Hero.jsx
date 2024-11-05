import React from 'react'
import './hero.css'
import Lottie from 'lottie-react';
import hero from "../../animation/hero.json";

export default function Hero() {
  return (
    <div className="hero-bg">
      <section className="hero flex">
        <div className="left-section">
          <div className="parent-avatar">
            <img
              src="https://i.ibb.co/B6dnrDB/anwarrior01.png"
              alt=""
              className="avatar"
            />
          </div>

          <h1 className="title">
            I'm a Developer and Designer Bringing Ideas to Life with Stunning
            Digital Creations
          </h1>
          <p className="sub-title">
            I’m a passionate front-end developer, full-stack Developer, web
            designer, and UI/UX enthusiast. I focus on finding the right balance
            between looks and function to build websites and web apps that are
            easy to use and look great. I enjoy turning ideas into digital
            solutions that people love to interact with.
          </p>
          <div className="all-icons flex">
            <div className="icon icon-twitter-square"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-facebook-square"></div>
            <div className="icon icon-linkedin-square"></div>
            <div className="icon icon-github"></div>
          </div>
        </div>
        <div className="right-section animation ">
          <Lottie
            style={{
              width: "33rem",
            }}
            animationData={hero}
          />
        </div>
      </section>
    </div>
  );
}
