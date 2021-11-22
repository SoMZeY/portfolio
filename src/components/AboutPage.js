import React from "react";
import Name from "./Name";
import "./AboutPage.css";

function AboutPage(props) {
  return (
    <div className="about-page">
      <div className="about-sidebar">
        <Name></Name>
      </div>
      <div className="about-content">
        <h1>ABOUT ME</h1>
        <p>
          I'm Vladyslav Bordia, freshman at the Bucks County Community College;
          majoring in Computer Science. My current learning interest is
          React.js, but i have minor knowledge of Java and .NET.
        </p>
        <p>
          I would like to get into software development sphere, and ready to
          accept offers for internships or entry level jobs.
        </p>
        <h1>Contact Me!</h1>
        <h1>{"<EMAIL LOGO>"}</h1>
      </div>
    </div>
  );
}

export default AboutPage;
