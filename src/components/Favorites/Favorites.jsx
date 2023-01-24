/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import Favorite from "./Favorite";
import styles from "../Favorites/Favorites.module.css";
import { orderCardsaction, filterCardsaction } from "../../redux/actions";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.containerFavorites}>
        <div className={styles.divCardsFavorites}>
          {this.props.myFavorites.map((card) => (
            <Favorite
              key={card.id}
              id={card.id}
              name={card.name}
              species={card.species}
              gender={card.gender}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    ...state,
    myFavorites: [...state.myFavorites],
  };
};

export default connect(mapStateToProps, null)(Favorites);
// eslint-disable-next-line linebreak-style
/* eslint-enable */
