import React, { useContext } from "react";

import styles from "./About.module.css";
import PortfolioContext from "../../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section className={styles.About}>
      <div className={styles.AboutWrapper}>
        <h1 className={styles.Title}>About</h1>
        <div className={styles.AboutRow}>
          <div className={styles.AboutCol}>
            <div className={styles.ImgWrapper}>
              <img src={img} alt="pic" />
            </div>
          </div>
          <div className={styles.AboutCol}>
            <div className={styles.InfoWrapper}>
              <p className={styles.InfoText}>{paragraphOne || null}</p>
              <p className={styles.InfoText}>{paragraphTwo || null}</p>
              <p className={styles.InfoText}>{paragraphThree || null}</p>
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
      </div>
    </section>
  );
};

export default About;
