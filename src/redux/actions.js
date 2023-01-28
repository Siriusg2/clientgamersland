/* eslint-disable no-undef */
/* eslint-disable function-paren-newline */
/* eslint-disable consistent-return */
import axios from 'axios';

export const FILTER_BY_GENRES = 'FILTER_BY_GENRES';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const GET_GAMES = 'GET_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME';
export const SET_FILTER = 'SET_FILTER';
export const RESET_FILTER = 'RESET_FILTER';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';

export const createGame = (game) => async (dispatch) => {
  try {
    const response = await axios.post('/videogames', game);

    return typeof response.data !== 'string'
      ? dispatch({ type: CREATE_VIDEOGAME, payload: response.data })
      : response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const getGames = () => async (dispatch) => {
  try {
    const response = await axios.get('/videogames');
    dispatch({ type: GET_GAMES, payload: response.data });
  } catch (error) {
    alert(error.message);
  }
};
export const getGenres = () => async (dispatch) => {
  try {
    const response = await axios.get('/genres');
    dispatch({ type: GET_GENRES, payload: response.data });
  } catch (error) {
    alert(error.message);
  }
};
export const getGamesByName = (word) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/videogames?name=${word}`);
    dispatch({ type: GET_GAMES_BY_NAME, payload: response.data });
  } catch (error) {
    alert(error.message);
  }
};

export const filterCardsbyOrigin = (id) => ({
  type: FILTER_BY_ORIGIN,
  payload: id,
});
export const filterCardsbyGenres = (genre) => ({
  type: FILTER_BY_GENRES,
  payload: genre,
});

export const sortCardsbyRating = (type) => ({
  type: SORT_BY_RATING,
  payload: type,
});
export const sortCardsbyName = (type) => ({
  type: SORT_BY_NAME,
  payload: type,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
