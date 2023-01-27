/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from './eventHandlers/handleChange';
import { handleSubmit } from './eventHandlers/handleSubmit';
import validate from './eventHandlers/validate';

function Form() {
  const history = useHistory();
  const [errors, setErrors] = useState({ form: 'Must complete the form' });
  const genres = useSelector((state) => state.gameGenres);
  const [form, setForm] = useState({
    name: '',
    description: '',
    launch_date: '',
    rating: 0,
    platforms: [],
    genres: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  return (

    <form
      onSubmit={(e) => dispatch(handleSubmit(e, form, errors, history))}
      onChange={(e) => handleChange(e, setErrors, setForm, form)}
    >
      <label htmlFor="name" className="title-name">
        <strong>Name: </strong>
      </label>
      <br />
      <input
        className="name"
        placeholder="Name"
        type="text"
        id="name"
        name="name"
        autoComplete="off"
      />
      <div>
        {errors.name && (
        <p>
          -
          {errors.name}
          {' '}
        </p>
        )}
      </div>
      <br />
      <label htmlFor="description" className="title-name">
        <strong>Description: </strong>
      </label>
      <br />
      <textarea
        className="name"
        name="description"
        placeholder="Description..."
        id="description"
        cols="30"
        rows="3"
      />
      <div>
        {errors.description && (
        <p>
          -
          {errors.description}
          {' '}
        </p>
        )}
      </div>
      <br />
      <label htmlFor="launch_date" className="title-name">
        <strong>Release Date: </strong>
      </label>
      <br />
      <input
        name="launch_date"
        className="dt"
        type="date"
        id="date"
        required
      />
      <div>
        {errors.launch_date && (
        <p>
          -
          {errors.launch_date}
          {' '}
        </p>
        )}
      </div>

      <br />
      <label htmlFor="rating" className="title-name">
        <strong>Rating: </strong>
      </label>
      <br />
      <input
        name="rating"
        className="dt"
        placeholder="Rate from 1 to 5"
        type="tel"
        id="rating"
        maxLength="1"
        autoComplete="off"
      />
      <br />
      <div>
        {errors.rating && (
        <p>
          -
          {errors.rating}
          {' '}
        </p>
        )}
      </div>
      <div>
        {errors.rating_max_min && (
        <p>
          -
          {errors.rating_max_min}
          {' '}
        </p>
        )}
      </div>
      <label className="title-name">
        <strong>Genres:</strong>
      </label>
      <div>
        {errors.genres && (
        <p>
          {errors.genres}
          {' '}
        </p>
        )}
      </div>
      <div id="genres" className="genres-div">
        {genres?.map((genre) => (
          <div id={genre.name} key={genre.id}>
            <input
              key={genre.id}
              name={genre.name}
              value={genre.id}
              type="checkbox"
              id={genre.id}
              checked={form.genres.includes(parseInt(genre.id, 10))}
            />
            <label htmlFor={genre.name}>{genre.name}</label>
          </div>
        ))}
      </div>
      <br />
      <label className="title-name">
        <strong>Platforms: </strong>
      </label>
      <div>
        {errors.platforms && (
        <p>
          {errors.platforms}
          {' '}
        </p>
        )}
      </div>
      <div id="platforms" className="plat-div">
        <div>
          <input
            name="PC"
            type="checkbox"
            id="PC"
            checked={form.platforms.includes('PC')}
          />
          <label htmlFor="PC">PC</label>
        </div>
        <div>
          <input
            name="iOS"
            type="checkbox"
            id="iOS"
            checked={form.platforms.includes('iOS')}
          />
          <label htmlFor="iOS">iOS</label>
        </div>
        <div>
          <input
            name="Android"
            type="checkbox"
            id="Android"
            checked={form.platforms.includes('Android')}
          />
          <label htmlFor="Android">Android</label>
        </div>
        <div>
          <input
            name="macOS"
            type="checkbox"
            id="macOS"
            checked={form.platforms.includes('macOS')}
          />
          <label htmlFor="macOS">macOS</label>
        </div>
        <div>
          <input
            name="PlayStation 4"
            type="checkbox"
            id="PlayStation 4"
            checked={form.platforms.includes('PlayStation 4')}
          />
          <label htmlFor="PlayStation 4">PlayStation 4</label>
        </div>
        <div>
          <input
            name="PlayStation 5"
            type="checkbox"
            id="PlayStation 5"
            checked={form.platforms.includes('PlayStation 5')}
          />
          <label htmlFor="PlayStation 5">PlayStation 5</label>
        </div>
        <div>
          <input
            name="XBOX"
            type="checkbox"
            id="XBOX"
            checked={form.platforms.includes('XBOX')}
          />
          <label htmlFor="XBOX">XBOX</label>
        </div>
        <div>
          <input
            name="PS Vita"
            type="checkbox"
            id="PS Vita"
            checked={form.platforms.includes('PS Vita')}
          />
          <label htmlFor="PS Vita">PS Vita</label>
        </div>
      </div>
      <br />
      <div className="div-but-form">
        <button type="submit">Create</button>
      </div>
    </form>

  );
}

export default Form;
