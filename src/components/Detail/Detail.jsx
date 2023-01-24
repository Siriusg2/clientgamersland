/* eslint-disable */
import React from "react";
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";

const Detail = () => {
  const cardName = useParams();
  const [character, setcharacter] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/videogames/${cardName.id}`
        );
        const char = response.data;
        if (char.id) {
          setcharacter({
            id: char.id,
            name: char.name,
            description: char.description,
            image: char.background_image,
            released: char.launch_date,
            rating: char.rating,
            platforms: char.platforms,
            genres: char.genres,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (err) {
        window.alert(err.message);
      }
    }
    fetchData();
  }, [cardName]);
  return (
    <>
      {" "}
      <div className={styles.divDetail}>
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info} style={{ color: "rgb(8, 194, 8)" }}>
            <span className={styles.label}>ID Game:</span> #{character.id}
            <hr />
            <span className={styles.label}>Name:</span> {character.name}
            <hr />
            <span className={styles.label}> Rating: </span>
            {character.rating}
            <hr /> <span className={styles.label}>Released:</span>{" "}
            {character.released}
            <hr /> <span className={styles.label}> Genres:</span>{" "}
            {character.genres?.map((string, index) => (
              <span key={index}>
                {string}
                {index !== character.genres.length - 1 ? ", " : ""}
              </span>
            ))}
            <hr />
            <span className={styles.label}>Platforms:</span>{" "}
            {character.platforms?.map((string, index) => (
              <span key={index}>
                {string}
                {index !== character.platforms.length - 1 ? ", " : ""}
              </span>
            ))}
          </h3>
        </div>
        <div className={styles.divDetailImage}>
          <img
            src={character.image}
            alt={character.name}
            className={styles.img}
          ></img>
        </div>
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info} style={{ color: "rgb(8, 194, 8)" }}>
            <span className={styles.label}>Game Description:</span>
            <p>{character.description}</p>
            <hr />
          </h3>
        </div>
      </div>
    </>
  );
};

export default Detail;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
