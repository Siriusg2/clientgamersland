/* eslint-disable */

import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading"


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
          alert("Game details is not available");
        }
      } catch (err) {
        alert(err.message);
      }
    }
    fetchData();
  }, [cardName]);
  if(Object.keys(character).length){return (
    <>

      <div style={{
        backgroundImage: `url(${character.image})`,
        backgroundSize: "cover",
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: "-99",
        opacity:".8"
      }}/>
        <div className={styles.container} >
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info}>
            <span className={styles.label}>ID Game:</span> {character.id}
            <br />
            <span className={styles.label}><br />Name:</span> {character.name}
            <br />
            <span className={styles.label}> <br />Rating: </span>
            {character.rating}
            <br /> <span className={styles.label}><br />Released:</span>{" "}
            {character.released}
            <br /> <span className={styles.label}> <br />Genres:</span>{" "}
            {character.genres?.map((string, index) => (
              <span key={index}>
                {string}
                {index !== character.genres.length - 1 ? ", " : ""}
              </span>
            ))}
            <br />
            <span className={styles.label}><br />Platforms:</span>{" "}
            {character.platforms?.map((string, index) => (
              <span key={index}>
                {string}
                {index !== character.platforms.length - 1 ? ", " : ""}
              </span>
            ))}
          </h3>
        </div>
          
   <img src={character.image} className={styles.img}/>
        <div className={styles.divDescription}>
        
            <span className={styles.label}>Game Description:</span>
            <p>{character.description}</p></div>
  
        </div>
   
    </>
  );}else{
return (
  <><Loading/>
  </>
)
  }
};

export default Detail;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
