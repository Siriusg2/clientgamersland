/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import validate from './validate';
import { createGame } from '../../../redux/actions';

export const handleSubmit = (e, form, errors, history) => async (dispatch) => {
  e.preventDefault();
  validate(form);

  if (Object.values(errors).length) {
    return alert('You must correct the mistakes');
  }
  try {
    const result = await dispatch(createGame(form));

    if (typeof result === 'string') {
      alert(result);
    } else {
      history.push('/home');
      alert(`Game ${form.name} was created successfully`);
    }
  } catch (error) {
    alert(error.message);
  }
};
