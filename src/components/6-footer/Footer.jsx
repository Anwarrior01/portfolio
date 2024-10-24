import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About & Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>
      <p>&copy;Anwarrior01. All rights reserved.</p>

      <div className="all-icons flex">
        <div className="icon icon-twitter-square"></div>
        <div className="icon icon-instagram"></div>
        <div className="icon icon-facebook-square"></div>
        <div className="icon icon-linkedin-square"></div>
        <div className="icon icon-github"></div>
      </div>
    </footer>
  );
}
