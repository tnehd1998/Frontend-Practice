import Head from "next/head";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Starbucks | {id}</title>
      </Head>
      This is Dynamic Page {id}
    </div>
  );
};

export default DynamicRoute;
