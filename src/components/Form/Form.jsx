/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from './eventHandlers/handleChange';
import { handleSubmit } from './eventHandlers/handleSubmit';
import validate from './eventHandlers/validate';
import styles from './Form.module.css';
import Bgvideo from '../Bgvideo/Bgvideo';
import landingvideo from '../../bgvideos/form.mp4';
import errorimage from '../../bgvideos/bmosad.gif';
import noerrorimage from '../../bgvideos/bmohappy.gif';

function Form() {
  const history = useHistory();
  const genres = useSelector((state) => state.gameGenres);
  const formDetail = useSelector((state) => state.gameDetails);
  const dispatch = useDispatch();
  const [isToUpdate, setIsToUpdate] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    description: '',
    launch_date: '',
    rating: 0,
    platforms: [],
    genres: [],
  });

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  useEffect(() => {
    if (Object.values(formDetail).length) {
      setForm({
        id: formDetail.id,
        name: formDetail.name,
        description: formDetail.description,
        launch_date: formDetail.launch_date,
        rating: formDetail.rating,
        platforms: formDetail.platforms,
        genres: genres
          .filter((object) => formDetail.genres.includes(object.name))
          .map((object) => object.id),
      });
      setIsToUpdate(true);
    }
  }, []);

  return (
    <>
      <Bgvideo video={landingvideo} />
      <div className={styles.container}>
        <div className={styles.divForm}>
          <form
            onSubmit={(e) => handleSubmit(e, form, history, isToUpdate, dispatch)}
            onChange={(e) => handleChange(e, setErrors, setForm, form)}
          >
            <div className={styles.divInputs}>
              <label htmlFor="name">Name:</label>
              <br />
              <input
                className={styles.inputs}
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                value={form.name}
              />

              <br />
              <label htmlFor="description">Description:</label>
              <br />
              <textarea
                name="description"
                placeholder="Description..."
                id="description"
                cols="30"
                rows="3"
                value={form.description}
              />

              <br />
              <label htmlFor="launch_date">Release Date:</label>
              <br />
              <input
                className={styles.inputs}
                name="launch_date"
                type="date"
                id="date"
                required
                value={form.launch_date}
              />

              <br />
              <label htmlFor="rating">Rating:</label>
              <br />
              <input
                className={styles.inputs}
                name="rating"
                placeholder="Rate from 1 to 5"
                type="tel"
                id="rating"
                maxLength="1"
                autoComplete="off"
                value={form.rating}
              />
              <br />
            </div>
            <div className={styles.divGenres}>
              <label>Genres:</label>

              <div id="genres" className={styles.checkContainer}>
                {genres?.map((genre) => (
                  <div id={genre.name} key={genre.id} className={styles.check}>
                    <label htmlFor={genre.name}>{genre.name}</label>
                    <input
                      key={genre.id}
                      name={genre.name}
                      value={genre.id}
                      type="checkbox"
                      id={genre.id}
                      checked={form.genres.includes(parseInt(genre.id, 10))}
                    />
                  </div>
                ))}
              </div>
              <br />
            </div>
            <div className={styles.divPlatforms}>
              <label>Platforms:</label>

              <div id="platforms" className={styles.checkContainer}>
                <div className={styles.check}>
                  <label htmlFor="PC">PC</label>
                  <input
                    name="PC"
                    type="checkbox"
                    id="PC"
                    checked={form.platforms.includes('PC')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="iOS">iOS</label>
                  <input
                    name="iOS"
                    type="checkbox"
                    id="iOS"
                    checked={form.platforms.includes('iOS')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="Android">Android</label>
                  <input
                    name="Android"
                    type="checkbox"
                    id="Android"
                    checked={form.platforms.includes('Android')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="macOS">macOS</label>
                  <input
                    name="macOS"
                    type="checkbox"
                    id="macOS"
                    checked={form.platforms.includes('macOS')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="PlayStation 4">PlayStation 4</label>
                  <input
                    name="PlayStation 4"
                    type="checkbox"
                    id="PlayStation 4"
                    checked={form.platforms.includes('PlayStation 4')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="PlayStation 5">PlayStation 5</label>
                  <input
                    name="PlayStation 5"
                    type="checkbox"
                    id="PlayStation 5"
                    checked={form.platforms.includes('PlayStation 5')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="XBOX">XBOX</label>
                  <input
                    name="XBOX"
                    type="checkbox"
                    id="XBOX"
                    checked={form.platforms.includes('XBOX')}
                  />
                </div>
                <div className={styles.check}>
                  <label htmlFor="PS Vita">PS Vita</label>
                  <input
                    name="PS Vita"
                    type="checkbox"
                    id="PS Vita"
                    checked={form.platforms.includes('PS Vita')}
                  />
                </div>
              </div>
              <br />

              {!isToUpdate ? (
                <div className={styles.divbuttons}>
                  {Object.keys(errors).length ? (
                    <button
                      type="submit"
                      disabled
                      className={styles.buttondisabled}
                    >
                      Create
                    </button>
                  ) : (
                    <button type="submit" className={styles.button}>
                      Create
                    </button>
                  )}

                  <button
                    type="button"
                    className={styles.buttonReset}
                    onClick={() => setForm({
                      name: '',
                      description: '',
                      launch_date: '',
                      rating: 0,
                      platforms: [],
                      genres: [],
                    })}
                  >
                    Reset
                  </button>
                </div>
              ) : (
                <div className={styles.divbuttons}>
                  {Object.keys(errors).length ? (
                    <button
                      type="submit"
                      disabled
                      className={styles.buttondisabled}
                    >
                      Update
                    </button>
                  ) : (
                    <button type="submit" className={styles.button}>
                      Update
                    </button>
                  )}

                  <button
                    type="button"
                    className={styles.buttonReset}
                    onClick={() => setForm({
                      name: '',
                      description: '',
                      launch_date: '',
                      rating: 0,
                      platforms: [],
                      genres: [],
                    })}
                  >
                    Reset
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className={styles.divErrors}>
          <label>Form errors</label>
          <div>
            {errors.name && (
              <>
                <p>
                  ⛔
                  {' '}
                  {errors.name}
                  {' '}
                </p>
                <div>
                  {errors.genres && (
                  <p>
                    ⛔
                    {' '}
                    {errors.genres}
                    {' '}
                  </p>
                  )}
                </div>
              </>
            )}
          </div>
          {' '}
          <div>
            {errors.description && (
            <p>
              ⛔
              {' '}
              {errors.description}
              {' '}
            </p>
            )}
          </div>
          {' '}
          <div>
            {errors.launch_date && (
            <p>
              ⛔
              {' '}
              {errors.launch_date}
              {' '}
            </p>
            )}
          </div>
          {' '}
          <div>
            {errors.rating && (
            <p>
              ⛔
              {' '}
              {errors.rating}
              {' '}
            </p>
            )}

            {errors.rating_max_min && (
            <p>
              ⛔
              {' '}
              {errors.rating_max_min}
              {' '}
            </p>
            )}
          </div>
          {' '}
          <div>
            {errors.genres && (
            <p>
              {' '}
              ⛔
              {' '}
              {errors.genres}
              {' '}
            </p>
            )}
          </div>
          <div>
            {errors.platforms && (
            <p>
              {' '}
              ⛔
              {' '}
              {errors.platforms}
              {' '}
            </p>
            )}
          </div>
          <div className={styles.divImage}>
            {' '}
            {Object.values(errors).length ? (
              <img alt="error" src={errorimage} />
            ) : (
              <img alt="noerror" src={noerrorimage} />
            )}
            {' '}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
