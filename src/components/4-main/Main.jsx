import React from "react";
import "./main.css";
export default function Main() {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">All Projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React.js</button>
        <button>Laravel</button>
        <button>Mern</button>
        <button>Wordpress</button>
        <button>Ui/Ux Design</button>
      </section>
      <section className="right-section">
        <article className="car border">
          <img width={"270px"} src="./bg-portfolio.png" alt="" />
          <div style={{width:"270px"}} className="box">
            <h1 className="title">Lorem ipsum dolor sit.</h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              eveniet culpa unde autem sit nostrum!
            </p>
            <div className="flex">
              <div className="icon-link"></div>
              <div className="icon-github"></div>
              <a href="">
                more <span className="icon-arrow-right"></span>{""}
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
