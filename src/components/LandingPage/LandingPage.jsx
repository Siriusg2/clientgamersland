/* eslint-disable template-tag-spacing */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './LandingPage.module.css';
import videoBG from '../../bgvideos/cards.mp4';
import Bgvideo from '../Bgvideo/Bgvideo';

function LandingPage() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const handleClick = () => {
    setUser(username);
    setAnimationTrigger(!animationTrigger);
  };
  useEffect(() => {

  }, [user]);
  return user ? (
    <div className={styles.container}>
      <Bgvideo video={videoBG} />
      <h1 className={`${styles.title} ${animationTrigger ? styles.restart : ''}`}>
        Hi
        {' '}
        {user}
        , welcome to GamersLand!
      </h1>
      <NavLink to="/home">
        <button className={styles.start_btn}>START</button>
      </NavLink>
    </div>
  ) : (
    <div className={styles.container}>
      <Bgvideo video={videoBG} />
      <h1 className={styles.title}>Please enter a name:</h1>
      <input
        type="text"
        id="username"
        className={styles.input}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleClick} className={styles.start_btn}>
        SELECT
      </button>
    </div>
  );
}
export default LandingPage;
