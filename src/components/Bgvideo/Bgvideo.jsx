/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import styles from './Bgvideo.module.css';
// import videoBG from './landing.mp4';

function Bgvideo(props) {
  return (
    <div className={styles.video_background}>
      <div className={styles.video_foreground}>
        <video
          src={props.video}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
export default Bgvideo;
