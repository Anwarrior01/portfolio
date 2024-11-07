import React from "react";

export default function ProjectDetails({
  title,
  description,
  onBack,
  project,
  mode,
}) {
  return (
    <div className="project-details">
      <div className="details-header">
        <button className="back-button" onClick={onBack}>
          <span className="back-icon">&#8592;</span> Back
        </button>
        <div className="details-header-info">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="details-wrapper">
        <div className="details-right ">
          <div className="details-web-img-desc">
            <h1>Design Palette & Desktop View</h1>
            <h3>Primary Colors</h3>
            <ul className="colors">
              {project.colors.map((color, key) => {
                return (
                  <li className="color" key={key}>
                    {color.name} :{" "}
                    <div>
                      <span
                        style={{
                          color: `${color.value}`,
                        }}
                      >
                        {color.value}
                      </span>
                      <div
                        style={{
                          display: "inline",
                          padding: "0.5rem 1.1rem",
                          marginLeft: "1rem",
                          background: `${color.value}`,
                        }}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="details-web-img">
            <img
              src={
                mode === "dark"
                  ? project.darkmode_mockups[0]
                  : project.light_mode_mockups[0]
              }
              alt=""
            />
            <img
              src={
                mode === "dark"
                  ? project.darkmode_mockups[1]
                  : project.light_mode_mockups[1]
              }
              alt=""
            />
          </div>
        </div>

        {/* LEFT */}

        { project.light_mode_mockups[2] !== "" ?
          <div className="details-left ">
          <div className="details-mobile-img">
            <img
              src={
                mode === "dark"
                  ? project.darkmode_mockups[2]
                  : project.light_mode_mockups[2]
              }
              alt=""
            />
            <img
              src={
                mode === "dark"
                  ? project.darkmode_mockups[3]
                  : project.light_mode_mockups[3]
              }
              alt=""
            />
          </div>
          <div className="details-mobile-img-desc">
            <h1>Responsive Mobile Experience</h1>
            <h3>
              Optimized for mobile devices, delivering a seamless experience
              across all screen sizes
            </h3>
          </div>
        </div>
        : ""}
      </div>
    </div>
  );
}
