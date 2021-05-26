import React, { useContext, useState, useEffect } from "react";

import PortfolioContext from "../../context/context";
import styles from "./Hero.scss";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  console.log("title ", title);
  console.log("name ", name);
  console.log("subtitle ", subtitle);
  console.log("cta ", cta);
  return (
    <section className={styles.Container}>
      <div className={styles.Wrapper}>
        <h1 className={styles.Title}>
          {title || "Hi, my name is"}{" "}
          <span className={styles.MainTextColor}>{name}</span>
          <br />
          {subtitle}
        </h1>

        <div className={styles.ButtonWrapper}>
          <a className={styles.Button} href="/">
            {cta || "Know More"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
