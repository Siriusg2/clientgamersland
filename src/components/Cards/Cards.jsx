/* eslint-disable */
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Bgvideo from "../Bgvideo/Bgvideo";
import cardsvideo from "../../bgvideos/landing.mp4";

export default function Cards(props) {
  const allCharacters = useSelector((state) => state.allCharacters);
  const gamesFiltered = useSelector((state) => state.gamesFiltered);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] = useState(15);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  let currentCards;

  if (Array.isArray(allCharacters)) {
    currentCards = gamesFiltered.slice(indexOfFirstCard, indexOfLastCard);
  } else {
    currentCards = [];
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [gamesFiltered]);
  if (!allCharacters.length) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return currentCards.length > 15 || currentCards.length > 0 ? (
      <div className={styles.container}>
        <div className={styles.divControls}>
          <Bgvideo video={cardsvideo} />
          <SearchBar />
          <Filter />
          <Pagination
            cardPerPage={cardPerPage}
            totalCards={gamesFiltered.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <div className={styles.divCards}>
          {currentCards?.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              genres={card.genres ? card.genres : "UNKNOWN"}
              image={card.background_image}
            />
          ))}
        </div>
        <div className={styles.divPaginationbottom}> </div>
      </div>
    ) : !currentCards.length ? (
      <div className={styles.container}>
        <Bgvideo video={cardsvideo} />
        <SearchBar />
        <Filter />
        <h1 className={styles.noGames}>
          {" "}
          Oops! There are <br /> no games that match your search <br /> Try
          again!{" "}
        </h1>
      </div>
    ) : null;
  }
}

//
// eslint-disable-next-line linebreak-style
/* eslint-enable */
