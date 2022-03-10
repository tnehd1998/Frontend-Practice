import Link from "next/link";
import Card from "./Card";
import styles from "./SectionCards.module.css";

const SectionCards = ({ title, videos = [], size }) => {
  console.log(videos);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, index) => (
          <Link href={`/video/${video.id}`}>
            <a>
              <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
