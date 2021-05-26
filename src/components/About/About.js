import React, { useContext } from "react";

import styles from "./About.scss";
import PortfolioContext from "../../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section className="about-wrapper">
      <h1 className="title">About Me</h1>
      <div className="about-row">
        <div className="about-col">
          <div className="img-wrapper">
            <img src={img} alt="pic" />
          </div>
        </div>
        <div className="about-col">
          <div className="info-wrapper">
            <p className="info-text">{paragraphOne || null}</p>
            <p className="info-text">{paragraphTwo || null}</p>
            <p className="info-text">{paragraphThree || null}</p>
            {resume && (
              <div className={styles.ButtonWrapper}>
                <a className={styles.Button} href="/">
                  {resume}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
