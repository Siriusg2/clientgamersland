import {
  sortCardsbyRating,
  sortCardsbyName,

  setFilter,
} from '../../redux/actions';

export const handleSortByName = (event) => (dispatch) => {
  const targetValue = event.target.value;
  document.getElementById('sortByGameRating').selectedIndex = 0;
  dispatch(sortCardsbyName(targetValue));
};
export const handleSortByRating = (event) => (dispatch) => {
  const targetValue = event.target.value;

  dispatch(sortCardsbyRating(targetValue));
  document.getElementById('sortByGameName').selectedIndex = 0;
};

export const handleFilterByOrigin = (event, setState) => (dispatch) => {
  const targetValue = event.target.value;
  setState(targetValue);
  dispatch(setFilter(targetValue));
};
export const handleFilterByGenre = (event, setState) => (dispatch) => {
  const targetValue = event.target.value;
  setState(targetValue);

  dispatch(setFilter(targetValue));
};
