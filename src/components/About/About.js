import React, { useContext } from "react";

import PortfolioContext from "../../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="img-wrapper">
          <img src="img" alt="image" />
        </div>
        <div className="paragraph-wrapper">
          <p className="p1">{paragraphOne || null}</p>
          <p className="p2">{paragraphTwo}</p>
          <p className="p3">{paragraphThree}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
