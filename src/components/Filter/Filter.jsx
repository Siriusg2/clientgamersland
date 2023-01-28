/* eslint-disable */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as handlers from "./eventHandlers";
import {
  filterCardsbyGenres,
  filterCardsbyOrigin,
} from "../../redux/actions";
import styles from "./Filter.module.css";

const Filter = () => {
  const genres = useSelector((state) => state.gameGenres);
  const dispatch = useDispatch();
const [originFilter, setOriginFilter] = useState("")
const [genreFilter, setgenreFilter] = useState("")
  
  // useEffect(() => {}, [dispatch, filterCardsbyGenres, filterCardsbyOrigin]);
  return (
    <div className={styles.container}>
      <div className={styles.filterOptions}>
        <label className={styles.label}>Sort for Game Name :</label>
        <select
          id="sortByGameName"
          name="sortByGameName"
          className={styles.select}
          onChange={(e) => dispatch(handlers.handleSortByName(e))}
        >
          <option key={"Default"} value="Default">
            Default
          </option>
          <option key={"Ascending"} value="Ascending">
            Ascending
          </option>
          <option key={"Descending"} value="Descending">
            Descending
          </option>
        </select>
      </div>
      <div className={styles.filterOptions}>
        <label className={styles.label}>Sort by game rating:</label>
        <select
          id="sortByGameRating"
          name="order"
          className={styles.select}
          onChange={(e) => dispatch(handlers.handleSortByRating(e))}
        >
          <option key={"Default"} value="Default">
            Default
          </option>
          <option key={"Ascending"} value="Ascending">
            Ascending
          </option>
          <option key={"Descending"} value="Descending">
            Descending
          </option>
        </select>
        </div>
        <div className={styles.filterOptions}>
        <label className={styles.label}>
          Filter for game genre:
        </label>
        <select
          id="filterByGenre"
          name="gender"
          className={styles.select}
          value={genreFilter}
          onChange={(e) => dispatch(handlers.handleFilterByGenre(e,  setgenreFilter))}
        >
          <option key="all" value="all">
            All
          </option>
          {genres?.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select></div>
         <div className={styles.filterOptions}>
        <label className={styles.label}>
          Filter by game origin:
        </label>
        <select
          id="filterByorigin"
          name="origin"
          className={styles.select}
          value={originFilter}
          onChange={(e) => dispatch(handlers.handleFilterByOrigin(e,  setOriginFilter))}
        >
          <option
            key="all"
            value="all"
           
          >
            All
          </option>
          <option key="user" value="user">
            User created
          </option>
          <option key="Existing game" value="API">
            Existing game
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
