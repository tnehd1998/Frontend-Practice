import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Billy",
      company: "Naver",
      theme: "dark",
      title: "Software Engineer",
      email: "billy@gmail.com",
      message: "Hi everyone 👻",
      fileName: "billy",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Mookie Betts",
      company: "LA Dodgers",
      theme: "light",
      title: "MLB Right Fielder",
      email: "mookie@gmail.com",
      message: "MVP",
      fileName: "mookie",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Giannis Antetokounmpo",
      company: "Milwaukee Bucks",
      theme: "colorful",
      title: "NBA Power Forward",
      email: "billy@gmail.com",
      message: "GOAT",
      fileName: "giannis",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
