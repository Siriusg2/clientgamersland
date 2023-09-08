/* eslint-disable */

import styles from "./Detail.module.css";

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { deleteGame } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading"
import { setFormToUpdate } from "../../redux/actions";


const Detail = () => {
  let game = useSelector((state)=> state.gameDetails)
  const dispatch = useDispatch()
 const history  = useNavigate()


// useEffect(()=>{
// return ()=>dispatch(resetGameDetails())
// }, [dispatch])

useEffect(()=>{
  return () => {game = {}}
}, [])


  if(Object.keys(game).length){
    if(typeof game.id === "string"){
      return (
        <>
    
          <div style={{
            backgroundImage: `url(${game.background_image})`,
            backgroundSize: "cover",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: "-99",
            opacity:".8"
          }}/>
            <div className={styles.container} >
            <div className={styles.divDetailtext}>
              <h3 className={styles.h3Info}>
                <span className={styles.label}>ID Game:</span> {game.id}
                <br />
                <span className={styles.label}><br />Name:</span> {game.name}
                <br />
                <span className={styles.label}> <br />Rating: </span>
                {game.rating}
                <br /> <span className={styles.label}><br />Released:</span>{" "}
                {game.launch_date}
                <br /> <span className={styles.label}> <br />Genres:</span>{" "}
                {game.genres?.map((string, index) => (
                  <span key={index}>
                    {string}
                    {index !== game.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
                <br />
                <span className={styles.label}><br />Platforms:</span>{" "}
                {game.platforms?.map((string, index) => (
                  <span key={index}>
                    {string}
                    {index !== game.platforms.length - 1 ? ", " : ""}
                  </span>
                ))}
              </h3>
            </div>
              
       <img src={game.background_image} className={styles.img}/>
            <div className={styles.divDescription}>
            
                <span className={styles.label}>Game Description:</span>
                <p className={styles.p}>{game.description}</p></div>
                <div className={styles.divButton}>
                <button className={styles.button} onClick={()=> {dispatch(setFormToUpdate());
               history.push('/create'); }}>
                
                Update</button>
                <button className={styles.buttonReset} onClick={()=>{
                  dispatch(deleteGame(game.id));
               
                  history('/home');
                
                } }>
                Delete</button></div>
            </div>
       
        </>
      );
    }else{
      return (
        <>
    
          <div style={{
            backgroundImage: `url(${game.background_image})`,
            backgroundSize: "cover",
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: "-99",
            opacity:".8"
          }}/>
            <div className={styles.container} >
            <div className={styles.divDetailtext}>
              <h3 className={styles.h3Info}>
                <span className={styles.label}>ID Game:</span> {game.id}
                <br />
                <span className={styles.label}><br />Name:</span> {game.name}
                <br />
                <span className={styles.label}> <br />Rating: </span>
                {game.rating ? game.rating : 1}
                <br /> <span className={styles.label}><br />Released:</span>{" "}
                {game.launch_date ? game.launch_date : "2023-01-31"}
                <br /> <span className={styles.label}> <br />Genres:</span>{" "}
                {game.genres.length ? game.genres.map((string, index) => (
                  <span key={index}>
                    {string}
                    {index !== game.genres.length - 1 ? ", " : ""}
                  </span>
                )) : "UNKNOW"}
                <br />
                <span className={styles.label}><br />Platforms:</span>{" "}
                {game.platforms?.map((string, index) => (
                  <span key={index}>
                    {string}
                    {index !== game.platforms.length - 1 ? ", " : ""}
                  </span>
                ))}
              </h3>
            </div>
              
       <img src={game.background_image} className={styles.img}/>
            <div className={styles.divDescription}>
            
                <span className={styles.label}>Game Description:</span>
                <p className={styles.p}>{game.description}</p></div>
               
            </div>
       
        </>
      );
    }
  }else{
return (
  <><Loading/>
  </>
)
  }
};

export default Detail;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
