import React, { useContext, useState, useEffect } from "react";

import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  console.log("title ", title);
  console.log("name ", name);
  console.log("subtitle ", subtitle);
  console.log("cta ", cta);
  return <div></div>;
};

export default Header;
