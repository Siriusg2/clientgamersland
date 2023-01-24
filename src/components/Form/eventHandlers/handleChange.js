import validate from './validate';

export const handleChange = (e, setErrors, setForm, form) => {
  if (e.target.parentNode.parentNode.id === 'genres') {
    if (e.target.checked) {
      setForm((prevState) => ({
        ...prevState,
        genres: [...form.genres, parseInt(e.target.value, 10)],
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        genres: form.genres.filter((x) => parseInt(e.target.value, 10) !== x),
      }));
    }
  }

  if (e.target.parentNode.parentNode.id === 'platforms') {
    if (e.target.checked) {
      setForm((prevState) => ({
        ...prevState,
        platforms: [...form.platforms, e.target.name],
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        platforms: form.platforms.filter((x) => e.target.name !== x),
      }));
    }
  }
  if (e.target.type !== 'checkbox') {
    e.preventDefault();
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  setErrors(
    validate({
      ...form,
      [e.target.name]: e.target.value,
    }),
  );
};
