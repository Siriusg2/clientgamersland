/* eslint-disable default-param-last */
/* eslint-disable linebreak-style */
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  GET_GENRES,
  GET_GAMES,
  GET_GAMES_BY_NAME,
  SORT_BY_NAME,
  SORT_BY_RATING,
  SET_FILTER,
  RESET_FILTER,
  CREATE_VIDEOGAME,

} from './actions';

const initialState = {
  myFavorites: [],
  allMyFavorites: [],
  allCharacters: [],
  gameGenres: [],
  gamesFiltered: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allCharacters: action.payload,
        gamesFiltered: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        gameGenres: action.payload,
      };
    case GET_GAMES_BY_NAME:
      return {
        ...state,
        allCharacters: action.payload,
        gamesFiltered: action.payload,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allMyFavorites: [...state.allMyFavorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload,
        ),
        allMyFavorites: state.allMyFavorites.filter(
          (favorite) => favorite.id !== action.payload,
        ),
      };

    case SORT_BY_NAME:
      if (action.payload === 'Ascending') {
        return {
          ...state,
          allCharacters: state.allCharacters.slice(0).sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
          gamesFiltered: state.gamesFiltered.slice(0).sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
        };
      }
      return {
        ...state,
        allCharacters: state.allCharacters.slice(0).sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }),
        gamesFiltered: state.gamesFiltered.slice(0).sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        }),
      };

    case SORT_BY_RATING:
      if (action.payload === 'Ascending') {
        return {
          ...state,
          allCharacters: state.allCharacters
            .slice(0)
            .sort((a, b) => a.rating - b.rating),
          gamesFiltered: state.gamesFiltered
            .slice(0)
            .sort((a, b) => a.rating - b.rating),
        };
      }
      return {
        ...state,
        allCharacters: state.allCharacters
          .slice(0)
          .sort((a, b) => b.rating - a.rating),
        gamesFiltered: state.gamesFiltered
          .slice(0)
          .sort((a, b) => b.rating - a.rating),
      };

    case SET_FILTER:
      if (
        action.payload === 'user'
        || action.payload === 'API'
        || action.payload === 'all'
      ) {
        if (action.payload === 'user') {
          return {
            ...state,

            gamesFiltered: state.allCharacters.filter(
              (game) => typeof game.id === 'string',
            ),
          };
        }
        if (action.payload === 'API') {
          return {
            ...state,

            gamesFiltered: state.allCharacters.filter(
              (game) => typeof game.id === 'number',
            ),
          };
        }
        return {
          ...state,

          gamesFiltered: state.allCharacters,
        };
      }
      return {
        ...state,
        isFiltered: true,
        gamesFiltered: state.allCharacters.filter((game) => game.genres.includes(action.payload)),
      };

    case CREATE_VIDEOGAME:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        gamesFiltered: [...state.gamesFiltered, action.payload],
      };
    case RESET_FILTER:
      return {
        ...state,
        isFiltered: false,
        gamesFiltered: state.allCharacters,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

// eslint-disable-next-line linebreak-style
/* eslint-enable */
