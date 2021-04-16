import React, { useContext } from "react";

import styles from "./About.module.css";
import PortfolioContext from "../../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section className={styles.About}>
      <div className={styles.AboutWrapper}>
        <div className={styles.ImgWrapper}>
          <img src={img} alt="pic" />
        </div>
        <div className={styles.ParagraphWrapper}>
          <p className={styles.P1}>{paragraphOne || null}</p>
          <p className={styles.P2}>{paragraphTwo || null}</p>
          <p className={styles.P3}>{paragraphThree || null}</p>
          {resume && (
            <div className={styles.ButtonWrapper}>
              <a className={styles.Button} href="/">
                {resume}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
