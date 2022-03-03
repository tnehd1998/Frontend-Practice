import styles from "../styles/Banner.module.css";

const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>StarBucks</h1>
      <p className={styles.subTitle}>Find Local Coffee Shops!</p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
