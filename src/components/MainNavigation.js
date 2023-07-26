import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [height, setHeight] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navbar = useRef(null);

  //Get height
  useEffect(() => {
    setHeight(navbar.current.clientHeight);
  }, [height]);

  // Add/Remove sticky class
  window.addEventListener("scroll", () => {
    if (window.scrollY > height * 0.1) {
      setSticky((sticky) => (sticky = true));
    } else {
      setSticky((sticky) => (sticky = false));
    }
  });

  return (
    <nav
      className={`${classes.header} ${
        sticky || openMenu ? classes.sticky : ""
      }`}
      ref={navbar}
    >
      <p>Portfolio.</p>
      <ul className={`${classes.list} ${openMenu ? classes.active : ""}`}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/about"}
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
        <NavLink className={classes.contact} to={"/contact"}>
          Contact
        </NavLink>
      </ul>

      <button
        className={classes.hamburgerMenu}
        onClick={() => {
          setOpenMenu(() => !openMenu);
        }}
      >
        {openMenu ? (
          <ion-icon name="close"></ion-icon>
        ) : (
          <ion-icon name="menu"></ion-icon>
        )}
      </button>
    </nav>
  );
}

export default MainNavigation;
