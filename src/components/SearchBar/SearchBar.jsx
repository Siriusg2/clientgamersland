/* eslint-disable */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByName, getGames } from "../../redux/actions";

import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [game, setGame] = useState("");
  // const allCharacters = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();

  /*  handleEvent para el input, setea el estado de este componente al 
  valor ingresado por el usuario mediante el listener onChange*/
  const onInput = (event) => {
    const value = event.target.value;

    setGame(value);
  };

  const onClick = (word) => {
    if (!word) return dispatch(getGames());
    else {
      dispatch(getGamesByName(word));
      setGame("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="string"
        placeholder="Enter the name of a game, or a related word... "
        onChange={onInput}
        className={styles.inputSearchBar}
        id="input"
        value={game}
      />

      <button
        className={styles.buttonSearch}
        onClick={() => {
          game
            ? onClick(game)
            : alert("Please write a game name or a related word");
        }}
      >
        Search
      </button>
      <button className={styles.buttonRandom} onClick={() => onClick()}>
       Reset
      </button>
    </div>
  );
}
// eslint-disable-next-line linebreak-style
/* eslint-enable */
