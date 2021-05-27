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
    <section className="{hero-container">
      <div className="hero-wrapper">
        <h1 className="title">
          {title || "Hi, my name is"}{" "}
          <span className="main-text-color">{name}</span>
          <br />
          {subtitle}
        </h1>

        <div className="button-wrapper">
          <a className="button" href="/">
            {cta || "Know More"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
