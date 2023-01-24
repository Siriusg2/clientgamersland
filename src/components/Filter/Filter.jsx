/* eslint-disable */
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as handlers from "./eventHandlers";
import {
  filterCardsbyGenres,
  filterCardsbyOrigin,
  setFiltered,
} from "../../redux/actions";
import styles from "./Filter.module.css";

const Filter = (props) => {
  const genres = useSelector((state) => state.gameGenres);
  const allgames = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch, filterCardsbyGenres, filterCardsbyOrigin]);
  return (
    <>
      <div className={styles.filterOptions}>
        <label className={styles.labelId}>Sort for Game Name :</label>
        <select
          id="sortByGameName"
          name="sortByGameName"
          className={styles.selectId}
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
        <label className={styles.labelId}>Sort by game rating:</label>
        <select
          id="sortByGameRating"
          name="order"
          className={styles.selectId}
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
        <label className={styles.labelgender}>
          Filter for Videogame Genre:
        </label>
        <select
          id="filterByGenre"
          name="gender"
          className={styles.selectGender}
          onChange={(e) => dispatch(handlers.handleFilterByGenre(e, true))}
        >
          <option key="all" value="all">
            All
          </option>
          {genres?.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        <label className={styles.labelgender}>
          Filter by user created or existing game
        </label>
        <select
          id="filterByorigin"
          name="origin"
          className={styles.selectGender}
          onChange={(e) => dispatch(handlers.handleFilterByOrigin(e))}
        >
          <option
            key="all"
            value="all"
            onClick={() => dispatch(handlers.handleResetFilter())}
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
    </>
  );
};

export default Filter;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
