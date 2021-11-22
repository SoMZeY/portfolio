import React, { useState } from "react";
import Project from "./Project";
import "./Projects.css";

function Projects(props) {
  const [projectItems, setProjectItem] = useState([
    {
      name: "No Projects Yet",
      link: "none",
      codeLink: "none",
    },
    {
      name: "No Projects Yet",
      link: "none",
      codeLink: "none",
    },
    {
      name: "No Projects Yet",
      link: "none",
      codeLink: "none",
    },
    {
      name: "No Projects Yet",
      link: "none",
      codeLink: "none",
    },
    {
      name: "No Projects Yet",
      link: "none",
      codeLink: "none",
    },
  ]);

  return (
    <div className="portfolio-projects">
      <h1>PROJECTS</h1>
      <div className="projects">
        <ul className="projects-list">
          {projectItems.map((item) => {
            return (
              <li className="projects-list-item">
                <Project
                  name={item.name}
                  projectLink={item.link}
                  codeLink={item.codeLink}
                ></Project>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
