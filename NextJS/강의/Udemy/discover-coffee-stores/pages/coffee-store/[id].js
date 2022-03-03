import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <Link href="/coffee-store/two">
        <a>Go to Dynamic Page</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
