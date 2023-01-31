/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import validate from './validate';
import { createGame, updateGame } from '../../../redux/actions';

export const handleSubmit = async (e, form, history, isToUpdate, dispatch) => {
  e.preventDefault();
  validate(form);
  if (!isToUpdate) {
    try {
      const result = await dispatch((createGame(form)));

      if (typeof result === 'string') {
        alert(result);
      } else {
        alert(`Game ${form.name} was created successfully`);
        history.push('/home');
      }
    } catch (error) {
      alert(error.message);
    }
  } else {
    try {
      await dispatch(updateGame(form));

      history.push('/home');
    } catch (error) {
      alert(error.message);
    }
  }
};
