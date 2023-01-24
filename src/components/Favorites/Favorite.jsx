/* eslint-disable */

import { NavLink } from "react-router-dom";
import styles from "./Favorites.module.css";

import React from "react";

const Favorite = (props) => {
  return (
    <div className={styles.divCard}>
      <NavLink to={`/detail/${props.id}`}>
        <span className={styles.nameCharactertext}>{props.name}</span>
      </NavLink>
      <img src={props.image} alt="" className={styles.imgFavorite} />

      <span className={styles.speciesCharactertext}>{props.species}</span>
      <span className={styles.genderCharactertext}>{props.gender}</span>
      <span className={styles.idCharacterText}>ID: #{props.id}</span>
    </div>
  );
};

export default Favorite;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
