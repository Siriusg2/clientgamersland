/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom';
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.container}>
      <h1>Hola Gamer!, bienvenido a GamerLands!</h1>
      <h2>Cada juego es un universo!</h2>
      <NavLink to="/home">
        <button>Comencemos a explorar!</button>
      </NavLink>
    </div>
  );
}
export default LandingPage;
