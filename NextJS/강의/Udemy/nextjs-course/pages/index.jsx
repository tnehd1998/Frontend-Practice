import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a>Clients</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
