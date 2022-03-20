import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/billy.jpeg"
          alt="Face Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Billy</h1>
      <p>I'm a Frontend Developer</p>
    </section>
  );
};

export default Hero;
