import {
  sortCardsbyRating,
  sortCardsbyName,
  resetFilter,
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

export const handleFilterByOrigin = (event) => (dispatch) => {
  const targetValue = event.target.value;
  dispatch(setFilter(targetValue));
  document.getElementById('filterByGenre').selectedIndex = 0;
};
export const handleFilterByGenre = (event) => (dispatch) => {
  const targetValue = event.target.value;
  document.getElementById('filterByorigin').selectedIndex = 0;

  dispatch(setFilter(targetValue));
};
export const handleResetFilter = () => (dispatch) => {
  dispatch(resetFilter());
};
