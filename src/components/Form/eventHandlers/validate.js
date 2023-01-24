const validate = (form) => {
  const errors = {};
  if (!form.platforms.length) {
    errors.platforms = 'Please select at least one platform for this game';
  }
  if (!form.genres.length) {
    errors.genres = 'Please select at least one genre for this game';
  }
  if (!form.name) {
    errors.name = 'Game Name is required';
  } else if (form.name.length < 4) {
    errors.name = 'Game Name must have at least 4 characters';
  }
  if (!form.description) {
    errors.description = 'Description is required';
  } else if (form.description.length < 8) {
    errors.description = 'Description must have at least 8 characters';
  }
  if (!form.launch_date) {
    errors.launch_date = 'Release date is required';
  }

  if (!form.rating) {
    errors.rating = 'Rating is required';
  } else if (!/^[1-5]$/.test(form.rating)) {
    errors.rating_max_min = 'Rating must be between 1 and 5';
  }

  return errors;
};
export default validate;
