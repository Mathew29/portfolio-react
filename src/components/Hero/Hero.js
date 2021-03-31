import React, { useContext, useState, useEffect } from "react";

import PortfolioContext from "../../context/context";
import styles from "./Hero.module.css";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  console.log("title ", title);
  console.log("name ", name);
  console.log("subtitle ", subtitle);
  console.log("cta ", cta);
  return (
    <section className={styles.Container}>
      <h1 className={styles.Title}>
        {title || "Hi, my name is"}{" "}
        <span className={styles.MainTextColor}>{name}</span>
        <br />
        {subtitle}
      </h1>
      <p className={styles.Cta}>paragrah</p>
    </section>
  );
};

export default Header;
