/* eslint-disable */

import React from "react";
import styles from "./NotFound.module.css";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <h1 className={styles.divNotFound}>no me encuentro</h1>
  ) : null;
};

export default NotFound;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
