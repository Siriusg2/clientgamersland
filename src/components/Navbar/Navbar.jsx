/* eslint-disable */
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();

  if (location.pathname === "/home") {
    return (
      <div className={styles.container}>
        <div className={styles.divButton}>
          <NavLink to="/">
            <button className={styles.buttonReset}>
            To landing</button>
          </NavLink>
        </div>

        <div className={styles.divButton}>
          <NavLink to="/create">
          <button className={styles.button}>
            Create Game</button>
          </NavLink>
        </div>
        <div className={styles.divButton}>
          <NavLink to="/about" >
          <button className={styles.buttonAbout}>
            About</button>
          </NavLink>
        </div>
      
      </div>
    );
  }

  if (location.pathname === "/about") {
    return (
      <div className={styles.container}>
        <div className={styles.divButton}>
          <NavLink to="/" >
          <button className={styles.buttonReset}>
            To landing</button>
          </NavLink>
        </div>

        <div className={styles.divButton}>
          <NavLink to="/home">
          <button className={styles.buttonAbout}>
            Home</button>
          </NavLink>
        </div>
        <div className={styles.divButton}>
          <NavLink to="/create">
          <button className={styles.button}>
            Create Game</button>
          </NavLink>
        </div>
      
      </div>
    );
  }

  if (location.pathname === "/create") {
    return (
      <div className={styles.container}>
        <div className={styles.divButton}>
          <NavLink to="/" >
          <button className={styles.buttonReset}>
            To Landing</button>
          </NavLink>
        </div>

        <div className={styles.divButton}>
          <NavLink to="/home" >
          <button className={styles.button}>
            Home</button>
          </NavLink>
        </div>

        <div className={styles.divButton}>
          <NavLink to="/about" >
          <button className={styles.buttonAbout}>
            About</button>
          </NavLink>
        </div>
     
      </div>
    );
  }
  if (location.pathname.startsWith("/detail/")) {
    return (
      <div className={styles.container}>
        <div className={styles.divButton}>
          <NavLink to="/">
          <button className={styles.buttonReset}>
            To landing</button>
          </NavLink>
        </div>

        <div className={styles.divButton}>
          <NavLink to="/home" >
          <button className={styles.button}>
            Home</button>
          </NavLink>
        </div>
        
      </div>
    );
  }

  if (location.pathname === "/") {
    return null;
  }
}

export default Navbar;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
