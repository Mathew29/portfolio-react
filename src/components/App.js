import React, { useState, useEffect } from "react";
import Hero from "./Hero/Hero";

import "./App.css";
import { PortfolioProvider } from "../context/context";

import {
  aboutData,
  contactData,
  footerData,
  heroData,
  projectData,
} from "../data/data";

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState({});
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects({ ...projectData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <div>
        <Hero />
      </div>
    </PortfolioProvider>
  );
}

export default App;
