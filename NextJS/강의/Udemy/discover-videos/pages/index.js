import Head from "next/head";
import Banner from "../components/Banner/Banner";
import SectionCards from "../components/Card/SectionCards";
import NavBar from "../components/Nav/Navbar";
import styles from "../styles/Home.module.css";
import { getPopularVideos, getVideos } from "../lib/videos";

export async function getServerSideProps() {
  const disneyVideos = await getVideos("disney trailer");
  const baseballVideos = await getVideos("ladodgers");
  const productivityVideos = await getVideos("Productivity");
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, baseballVideos, productivityVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  baseballVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix : Movie App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="" />
        <Banner
          videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards
            title="LA Dodgers"
            videos={baseballVideos}
            size="small"
          />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
