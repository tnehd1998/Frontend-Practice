import Link from "next/link";
import Logo from "./Logo";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
