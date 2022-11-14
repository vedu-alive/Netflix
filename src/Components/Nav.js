import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <NavLink to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="netflix-logo"
            className="nav_logo"
          />
        </NavLink>
        <NavLink to={"/profile"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix logo"
            className="nav_avatar"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
