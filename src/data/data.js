import { uuid } from "uuidv4";
import profileImage from "../assets/images/Mathew0267-2000fpo JPEG.jpg";
// Hero Data
export const heroData = {
  title: "",
  name: "Mathew Akre",
  subtitle: "I'm the Web Developer",
  cta: "Know More",
};

// About Data
export const aboutData = {
  img: profileImage,
  paragraphOne:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate deserunt vero fugiat nam qui necessitatibus sapiente ratione illo eos, voluptatem deleniti rerum tempora animi ipsam consequuntur totam quae earum?",
  paragraphTwo:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias tenetur adipisci maxime magnam at quas impedit voluptate quos libero ipsa.",
  paragraphThree:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi minima, qui quaerat impedit minus totam iure laudantium voluptatum tempore? Repellendus perspiciatis neque minus est, similique dolorum eaque nam totam deleniti! Modi vel voluptatibus architecto soluta, atque minus totam eaque voluptas?",
  resume: "Resume",
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
