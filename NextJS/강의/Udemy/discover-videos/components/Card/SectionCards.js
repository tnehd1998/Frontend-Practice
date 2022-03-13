import Link from "next/link";
import Card from "./Card";
import cls from "classnames";
import styles from "./SectionCards.module.css";

const SectionCards = ({
  title,
  videos = [],
  size,
  shouldWrap = false,
  shouldScale,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={cls(shouldWrap && styles.wrap, styles.cardWrapper)}>
        {videos.map((video, index) => (
          <Link href={`/video/${video.id}`} key={index}>
            <a>
              <Card
                id={index}
                imgUrl={video.imgUrl}
                size={size}
                shouldScale={shouldScale}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionCards;
