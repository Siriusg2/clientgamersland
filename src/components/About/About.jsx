/* eslint-disable */

import styles from "./About.module.css";
import photo from "../..//bgvideos/fotofondoblanco.jpg";
import vdeo from "../..//bgvideos/cards.mp4";
import Bgvideo from "../Bgvideo/Bgvideo";

const About = () => {
  const genres = ["Terror, Suspense, RPG, Epic Fantasy "];
  const platforms = ["Github, Linkeldin, Instagram, Discord "];
  return (
    <>
      <Bgvideo video={vdeo}/>
      <div className={styles.container}>
        <div className={styles.divDetailtext}>
          <h3 className={styles.h3Info}>
            <span className={styles.label}>ID Game:</span> UNKNOW
            <br />
            <span className={styles.label}>
              <br />
              Name:
            </span>{" "}
            Gibson Gil
            <br />
            <span className={styles.label}>
              {" "}
              <br />
              Rating:{" "}
            </span>
            5
            <br />{" "}
            <span className={styles.label}>
              <br />
              Released:
            </span>{" "}
            1991-06-04
            <br />{" "}
            <span className={styles.label}>
              {" "}
              <br />
              Genres:
            </span>{" "}
            {genres?.map((string, index) => (
              <span key={index}>{string}</span>
            ))}
            <br />
            <span className={styles.label}>
              <br />
              Platforms:
            </span>{" "}
            {platforms?.map((string, index) => (
              <span key={index}>{string}</span>
            ))}
          </h3>
        </div>

        <img src={photo} className={styles.img} />
        <div className={styles.divDescription}>
          <span className={styles.label}>Game Description:</span>
          <p className={styles.p}>
            Hello and welcome to my GamersLand project! My name is Gibson Gil, and
            I am a [Certified Public Accountant and Informatics Engineer]. I
            have 3 years of experience in Web development, and I am passionate
            about music and literature on epic fantasy. I am open to connecting
            with people in my industry, and I am excited to learn about new
            opportunities, collaborations, and projects. Please feel free to
            reach out to me if you think we could work together or if you just
            want to chat. Thank you for visiting my project!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
// eslint-disable-next-line linebreak-style
/* eslint-enable */
