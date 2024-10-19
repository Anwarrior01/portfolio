import React, { useState } from 'react'
import './header.css'
export default function Header() {
  const [show,setShow]=useState(false)
  const showMenu = () =>{
    setShow(true)
  }
  const closeMenu = () => {
    setShow(false);
  };
  return (
    <header className="flex">
      <button
        onClick={() => {
          showMenu();
        }}
        className="menu"
      >
        <span className="icon-menu flex"></span>
      </button>
      {/* <div style={{ width: "32%" }} /> */}
      <nav>
        <ul className="flex">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <div style={{ width: "25%" }} className='marginLeft' /> */}
      <button className="mode">
        <span className="icon-moon-o"></span>
      </button>
      {show ? (
        <div className=" fixed ">
          <div className="">
            <ul className="modal">
              <li>
                <button onClick={closeMenu}>
                  <span className="icon-close"></span>
                </button>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </header>
  );
}
