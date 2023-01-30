/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import validate from './validate';
import { createGame } from '../../../redux/actions';

export const handleSubmit = async (e, form, errors, history) => {
  e.preventDefault();
  validate(form);

  if (Object.values(errors).length) {
    return alert('You must correct the mistakes');
  }
  try {
    const result = await (createGame(form));

    if (typeof result === 'string') {
      alert(result);
    } else {
      alert(`Game ${form.name} was created successfully`);
      history.push('/home');
      window.location.reload();
    }
  } catch (error) {
    alert(error.message);
  }
};
