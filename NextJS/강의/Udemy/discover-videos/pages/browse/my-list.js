import Head from "next/head";
import SectionCards from "../../components/Card/SectionCards";
import NavBar from "../../components/Nav/Navbar";
import { getMyList } from "../../lib/videos";

import styles from "../../styles/MyList.module.css";
import useRedirectUser from "../../utils/redirectUser";

export async function getServerSideProps(context) {
  const { userId, token } = await useRedirectUser(context);
  const videos = await getMyList(userId, token);

  return {
    props: {
      myListVideos: videos,
    },
  };
}

const MyList = ({ myListVideos }) => {
  return (
    <div>
      <Head>
        <title>My list</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title="My List"
            videos={myListVideos}
            size="small"
            shouldWrap
            shouldScale={false}
          />
        </div>
      </main>
    </div>
  );
};

export default MyList;
