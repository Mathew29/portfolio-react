import React, { useContext, useState, useEffect } from "react";

import styles from "./Hero.css";
import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  console.log("title ", title);
  console.log("name ", name);
  console.log("subtitle ", subtitle);
  console.log("cta ", cta);
  return (
  <section className={styles.Container}>
    <h1 className={styles.Title}></h1>
    <p className={styles.Cta}></p>
  </section>;)
};

export default Header;
