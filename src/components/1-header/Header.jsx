import React, { useEffect, useState } from "react";
import "./header.css";
export default function Header({ mode, changeMode }) {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      modeChange()
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      modeChange()
    }
  }, [theme]);
  const modeChange = () => {
      const mode = theme
      changeMode(mode);
  }
  const showMenu = () => {
    setShow(true);
  };
  const closeMenu = () => {
    setShow(false);
  };
  return (
    <header className="flex" id="home">
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* <div style={{ width: "25%" }} className='marginLeft' /> */}
      <button
        className="mode"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
