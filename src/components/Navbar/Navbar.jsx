/* eslint-disable */

import React from "react";

import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { unActivestyle, unActivestyleLogout } from "./NavStyles.js";

function Navbar(props) {
  const location = useLocation();

  if (location.pathname === "/home") {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink to="/" style={unActivestyleLogout}>
            Logout
          </NavLink>
        </div>

        <div className={styles.favoritesButtonHome}>
          <NavLink to="/create" style={unActivestyle}>
            Create Game
          </NavLink>
        </div>
        <div className={styles.aboutButtonHome}>
          <NavLink to="/about" style={unActivestyle}>
            About
          </NavLink>
        </div>
        <NavLink to="/favorites" style={unActivestyle}>
          Favorites
        </NavLink>
      </div>
    );
  }

  if (location.pathname === "/about") {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink to="/" style={unActivestyleLogout}>
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonAbout}>
          <NavLink to="/home" style={unActivestyle}>
            Home
          </NavLink>
        </div>
        <div className={styles.favoritesButtonAbout}>
          <NavLink to="/create" style={unActivestyle}>
            Create Game
          </NavLink>
        </div>
        <NavLink to="/favorites" style={unActivestyle}>
          Favorites
        </NavLink>
      </div>
    );
  }

  if (location.pathname === "/create") {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink to="/" style={unActivestyleLogout}>
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonFavorites}>
          <NavLink to="/home" style={unActivestyle}>
            Home
          </NavLink>
        </div>

        <div className={styles.aboutButtonFavorites}>
          <NavLink to="/about" style={unActivestyle}>
            About
          </NavLink>
        </div>
        <NavLink to="/favorites" style={unActivestyle}>
          Favorites
        </NavLink>
      </div>
    );
  }
  if (location.pathname.startsWith("/detail/")) {
    return (
      <div className={styles.divBar}>
        <div className={styles.logoutButton}>
          <NavLink to="/" style={unActivestyleLogout}>
            Logout
          </NavLink>
        </div>

        <div className={styles.homeButtonFavorites}>
          <NavLink to="/home" style={unActivestyle}>
            Home
          </NavLink>
        </div>
        <NavLink to="/favorites" style={unActivestyle}>
          Favorites
        </NavLink>
      </div>
    );
  }

  if (location.pathname === "/") {
    return null;
  }
}

export default Navbar;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
