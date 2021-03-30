import { v4 as uuidv4, v4 } from "uuid";

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
  { id: v4(), img: "", title: "", info: "", info2: "", url: "", repo: "" },
  { id: v4(), img: "", title: "", info: "", info2: "", url: "", repo: "" },
  { id: v4(), img: "", title: "", info: "", info2: "", url: "", repo: "" },
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
      id: v4(),
      name: "codepen",
      url: "",
    },
    {
      id: v4(),
      name: "linkedin",
      url: "",
    },
    {
      id: v4(),
      name: "github",
      url: "",
    },
  ],
};
