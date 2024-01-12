/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import validate from "./validate";
import { createGame, updateGame } from "../../../redux/actions";

export const handleSubmit = async (e, form, history, isToUpdate, dispatch) => {
  e.preventDefault();
  validate(form);
  if (!isToUpdate) {
    try {
      const result = await dispatch(createGame(form));

      if (typeof result === "string") {
        alert("Game already exists");
        alert(result);
      } else {
        alert(`Game ${form.name} was created successfully`);
        history("/home");
      }
    } catch (error) {
      alert(error.message);
    }
  } else {
    try {
      await dispatch(updateGame(form));

      history("/home");
    } catch (error) {
      alert(error.message);
    }
  }
};
