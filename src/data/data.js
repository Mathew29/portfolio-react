import { uuid } from "uuidv4";

// Hero Data
export const heroData = {
  title: "Web Developer",
  name: "Mathew Akre",
  subtitle: "",
  cta: "",
};

// About Data
export const aboutData = {
  img: "",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "",
};

// Projects Data
export const projectData = [
  { id: uuid(), img: "", title: "", info: "", info2: "", url: "", repo: "" },
  { id: uuid(), img: "", title: "", info: "", info2: "", url: "", repo: "" },
  { id: uuid(), img: "", title: "", info: "", info2: "", url: "", repo: "" },
];

// Contact Data
export const contactData = {
  cta: "",
  btn: "",
  email: "",
};

// Footer Data
export const footerData = {
  networks: [
    {
      id: uuid(),
      name: "codepen",
      url: "",
    },
    {
      id: uuid(),
      name: "linkedin",
      url: "",
    },
    {
      id: uuid(),
      name: "github",
      url: "",
    },
  ],
};

export const githubButtons = {
  isEnabled: true,
};
