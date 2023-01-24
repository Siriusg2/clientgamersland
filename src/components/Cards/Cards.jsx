/* eslint-disable */
import Card from "../Card/Card";
import styles from "./Cards.module.css";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

export default function Cards(props) {
  const allCharacters = useSelector((state) => state.allCharacters);
  const gamesFiltered = useSelector((state) => state.gamesFiltered);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  let currentCards;

  if (typeof allCharacters === "string") {
    currentCards = allCharacters;
  } else {
    currentCards = gamesFiltered.slice(indexOfFirstCard, indexOfLastCard);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [allCharacters]);
  return gamesFiltered.length > 15 ? (
    <>
      <div className={styles.welcome}>
        <h1>
          Hola querido Gamer, aca puedes encontrar un listado de 15 videojuegos
          para que puedas explorar cada uno de estos universos, haz click en el
          nombre de cualquiera
        </h1>
      </div>

      <SearchBar />
      <Filter />
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={gamesFiltered.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div className={styles.divCards}>
        {currentCards?.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            genres={card.genres}
            image={card.background_image}
          />
        ))}
      </div>
      <Pagination
        cardPerPage={cardPerPage}
        totalCards={gamesFiltered.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  ) : gamesFiltered.length <= 15 && gamesFiltered.length > 0 ? (
    <>
      <div className={styles.welcome}>
        <h1>
          Hola querido Gamer, aca puedes encontrar un listado de 15 videojuegos
          para que puedas explorar cada uno de estos universos, haz click en el
          nombre de cualquiera
        </h1>
      </div>
      <SearchBar />
      <Filter />
      <div className={styles.divCards}>
        {currentCards?.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            genres={card.genres}
            image={card.background_image}
          />
        ))}
      </div>
    </>
  ) : (
    <>
      <SearchBar />
      <h1>Oops! parece que no hay juegos que mostrar</h1>
    </>
  );
}

//
// eslint-disable-next-line linebreak-style
/* eslint-enable */
