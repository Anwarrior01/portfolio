import React, { useState } from "react";
import "./main.css";
import {myProjects} from "./myProjects"
import { AnimatePresence, motion, transform } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

export default function Main({ mode}) {
  const [selectedProject, setSelectedProject] = useState(null);
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
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const [currentActive, setCurrentActive] = useState("all");
  const [array, setArray] = useState(myProjects);
  return !selectedProject ? (
    <main className="flex">
      <section className="left-section flex" id="projects">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArray(myProjects);
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
        <AnimatePresence>
          {array.map((item, key) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{
                  type: "spring",
                  duration: 1,
                  damping: 8,
                  stiffness: 50,
                }}
                className="card "
                key={key}
              >
                <img width={"270px"} src={item.img} alt="" />
                <div style={{ width: "270px" }} className="box ">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">{item.description}</p>
                  <div className="flex icons">
                    <div className="flex" style={{ gap: "12px" }}>
                      <a href={item.demo} target={item.demo}>
                        <div className="icon-link"></div>
                      </a>
                      <a href={item.github} target={item.github}>
                        {" "}
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    {item.show_more ? (
                      <a
                        onClick={() => handleProjectClick(item)}
                        className="link flex"
                        style={{ gap: "3px", alignItems: "center" }}
                      >
                        more <span className="icon-arrow-right"></span>
                        {""}
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  ) : (
    <ProjectDetails
      mode={mode}
      project={selectedProject}
      title={selectedProject.title}
      description={selectedProject.description}
      onBack={handleBackClick}
    />
  );
}
