/* eslint-disable */
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Card.module.css";
import loading from "../..//bgvideos/loadingimage.gif"
import { getGameDetail } from "../../redux/actions";


function Card(props) {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(getGameDetail(id));
  };

  return ( <NavLink to={`/detail/${props.id}`} onClick={()=>{ handleClick(props.id)}} style={{textDecoration:'none'}}>
    <div className={styles.divCard}>
      

      <img className={styles.imgCard} src={props.image ? props.image : loading} alt="" />

     
        <span className={styles.label }>{props.name}</span>
     
<label className={styles.genres}>Genres:</label><div className={styles.divGeres}>
      {props.genres.length ? props.genres.map((string, index) => (
              <span key={index} className={styles.span}>
                 {string} 
                {index !== props.genres.length - 1 ? " " : ""}
              </span> 
            )): <span className={styles.span}>UNKNOW</span>} </div>
     
    </div> </NavLink>
  );
}



export default Card;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
