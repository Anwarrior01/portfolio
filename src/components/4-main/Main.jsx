import React, { useState } from "react";
import "./main.css";
import {myProjects} from "./myProjects"

export default function Main() {
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const ctgr = item.category.filter((myItem) => {
        return myItem === buttonCategory;
      });
      return ctgr[0] === buttonCategory;
    });
    setArray(newArr);
  };
  const [currentActive, setCurrentActive] = useState("all");
  const [array, setArray] = useState(myProjects);
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArray(myProjects)
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("htmlCss");
          }}
          className={currentActive === "htmlCss" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React.js
        </button>
        <button
          onClick={() => {
            handleClick("phpMysql");
          }}
          className={currentActive === "phpMysql" ? "active" : null}
        >
          PHP & Mysql
        </button>
        <button
          onClick={() => {
            handleClick("laravel");
          }}
          className={currentActive === "laravel" ? "active" : null}
        >
          Laravel
        </button>
        <button
          onClick={() => {
            handleClick("mern");
          }}
          className={currentActive === "mern" ? "active" : null}
        >
          Mern
        </button>
        <button
          onClick={() => {
            handleClick("wordpress");
          }}
          className={currentActive === "wordpress" ? "active" : null}
        >
          Wordpress
        </button>
        <button
          onClick={() => {
            handleClick("uiux");
          }}
          className={currentActive === "uiux" ? "active" : null}
        >
          Ui/Ux Design
        </button>
      </section>
      <section className="right-section flex">
        {array.map((item, key) => {
          return (
            <article className="card ">
              <img width={"270px"} src={item.img} alt="" />
              <div style={{ width: "270px" }} className="box ">
                <h1 className="title">{item.title}</h1>
                <p className="sub-title">{item.description}</p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "12px" }}>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a
                    href=""
                    className="link flex"
                    style={{ gap: "3px", alignItems: "center" }}
                  >
                    more <span className="icon-arrow-right"></span>
                    {""}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
