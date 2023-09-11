/* eslint-disable */

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "..//NotFound/NotFound.module.css";

const NotFound = () => {
  return (

    <div className={styles.container}>
      <p className={styles.notfound}>GAME OVER</p>

      <NavLink to="/home" >
        <button className={styles.button}>
          Home</button>
      </NavLink>
    </div>

  );
};

export default NotFound;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
