import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project">
      <p>{props.name}</p>
      <p>{props.projectLink}</p>
    </div>
  );
}

export default Project;
