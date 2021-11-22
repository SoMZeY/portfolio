import React from "react";

function SocialLinks(props) {
  return (
    <div>
      <a href={props.link}>
        <img src={props.image} alt={props.name}></img>
      </a>
    </div>
  );
}

export default SocialLinks;
