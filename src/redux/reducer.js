/* eslint-disable default-param-last */
/* eslint-disable linebreak-style */
import {

  GET_GENRES,
  GET_GAMES,
  GET_GAMES_BY_NAME,
  SORT_BY_NAME,
  SORT_BY_RATING,
  SET_FILTER,
  GET_GAME_DETAILS,
  RESET_GAME_DETAILS,

} from './actions';

const initialState = {
  allCharacters: [],
  gameGenres: [],
  gamesFiltered: [],
  gameDetails: {},

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allCharacters: action.payload,
        gamesFiltered: action.payload,
      };
    case GET_GAME_DETAILS: return {
      ...state, gameDetails: action.payload,
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
    case RESET_GAME_DETAILS:
      return {
        ...state, gameDetails: {},
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
        gamesFiltered: state.allCharacters.filter((game) => game.genres.includes(action.payload)),
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
