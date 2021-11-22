import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import "./Name.css";
import github from "../images/github_logo_icon.png";
import linkedin from "../images/linkedin_logo_icon.png";
import instagram from "../images/instagram_logo_icon.png";
import vladImage from "../images/vladImage.png";

function Name(props) {
  const [links, setLinks] = React.useState([
    {
      name: "GitHub",
      image: github,
      link: "https://github.com/SoMZeY",
    },
    {
      name: "LinkedIn",
      image: linkedin,
      link: "https://www.linkedin.com/in/vladyslav-bordia-4a2a1a221/",
    },
    {
      name: "Instagram",
      image: instagram,
      link: "https://www.instagram.com/",
    },
  ]);
  return (
    <div className="name-section">
      <img className="name-section-image" src={vladImage}></img>
      <h1 className="name-section-name">VLADYSLAV BORDIA</h1>
      <p className="name-section-occupation">
        Student at the Bucks County Community College
      </p>
      <ul className="name-section-list">
        {links.map((item, index) => {
          return (
            <li className="name-section-item">
              <SocialLinks
                name={item.name}
                link={item.link}
                image={item.image}
              ></SocialLinks>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Name;
