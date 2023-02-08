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
export const GET_GAME_DETAILS = 'GET_GAME_DETAILS';
export const RESET_GAME_DETAILS = 'RESET_GAME_DETAILS';
export const SET_FORM_TO_UPDATE = 'SET_FORM_TO_UPDATE';
export const CREATE_GAME = 'CREATE_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const DELETE_GAME = 'DELETE_GAME';

export const createGame = (game) => async (dispatch) => {
  try {
    const response = await axios.post('/videogames', game);

    if (typeof response.data === 'object') dispatch({ type: CREATE_GAME, payload: response.data });
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
export const updateGame = (game) => async (dispatch) => {
  try {
    const response = await axios.put(`/videogames/update/${game.id}`, game);
    return typeof response.data === 'object' ? dispatch({ type: UPDATE_GAME, payload: response.data }) : alert(response.data);
  } catch (error) {
    alert(error.message);
  }
};
export const deleteGame = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/videogames/delete/${id}`);

    if (response.status === 200) {
      dispatch({ type: DELETE_GAME, payload: id });
    } else return response;
  } catch (error) {
    alert(error.message);
  }
};

export const getGameDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/videogames/${id}`);

    return typeof response.data !== 'string'
      ? dispatch({ type: GET_GAME_DETAILS, payload: response.data })
      : alert(response.data);
  } catch (error) {
    alert(error.message);
  }
};
export const resetGameDetails = () => ({
  type: RESET_GAME_DETAILS,
});

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
    const response = await axios.get(`/videogames?name=${word}`);
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
export const setFormToUpdate = () => ({
  type: SET_FORM_TO_UPDATE,

});
