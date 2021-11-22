import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

function Navbar(props) {
  const [navbarItems, setNavbarItems] = React.useState([
    {
      name: "About",
      href: "none",
    },
    {
      name: "Projects",
      href: "none",
    },
    {
      name: "Contact",
      href: "none",
    },
  ]);

  const [navbar, setNavbarStatus] = useState(false);

  const shrinkNavbar = () => {
    if (window.scrollY >= 70) {
      setNavbarStatus(true);
    } else {
      setNavbarStatus(false);
    }
  };

  window.addEventListener("scroll", shrinkNavbar);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <ul className="navbar-list">
        {navbarItems.map((item, index) => {
          return (
            <li className="navbar-item">
              <NavbarItem name={item.name} link={item.href}></NavbarItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
