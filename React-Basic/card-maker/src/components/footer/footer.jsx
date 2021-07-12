import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>Make Your Own Card 🚀</p>
  </footer>
));

export default Footer;
