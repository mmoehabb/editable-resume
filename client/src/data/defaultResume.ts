import { Resume } from "@/types/resume";

export const defaultResume: Resume = {
  fullName: "MAHMOUD EHAB",
  jobTitle: "Software Developer",
  summary:
    "A Software Developer, with a wide range of experience in the field, holds a bachelor's degree in computer science, and have the knowledge and experience in software development principles, methods, and modern technologies in general, and in web technologies, in particular.",
  contactInfo: {
    email: "mo.ehab150@gmail.com",
    website: "https://moehab.surge.sh/",
    phone: "(20) 0114-375-9540",
    location: "Giza, Egypt",
  },
  projects: [
    {
      id: "1",
      title: "PWYP | Go Web Application",
      date: "Sep 2024",
      description:
        "A Full-stack web application developed with Golang. PWYP (Play with Your Pal) is a software that hosts a web application on your machine that makes it possible to play local games with your pals.",
    },
    {
      id: "2",
      title: "Definitions | Full-Stack Web Application",
      date: "Aug 2024",
      description:
        "Definitions is a full-stack web application dictionary that's continuously getting written by end users; users can supply the application with words, definitions, and different references.",
    },
    {
      id: "3",
      title: "Yellow | Cross-Platform Chat Application",
      date: "Jul 2024",
      description:
        "Yellow is an open-source, cross-platform, decentralized chat application. It can be used locally or globally; all that needed, to establish a connection between two users, is to share their ip addresses to one another.",
    },
    {
      id: "4",
      title: "CracksDB | NPM Package",
      date: "Jul 2024",
      description:
        "A minimalist permanent state manager that developers may use in applications where the complexity of common databases is deemed unnecessary and groundless.",
    },
  ],
  education: [
    {
      id: "1",
      institution: "Helwan University",
      date: "Jul 2022",
      degree: "Bachelor of Science",
      major: "Computer Science & Statistics",
    },
  ],
  experience: [],
  languages: [
    {
      name: "Arabic",
      proficiency: "Native Speaker",
    },
    {
      name: "English",
      proficiency: "Very good command",
    },
  ],
  certificates: [
    {
      id: "1",
      title: "Web Development Training Program",
      date: "Sep 2024",
      organization: "EFE - Education for Employment",
    },
    {
      id: "2",
      title: "Advanced Web Development Nanodegree",
      date: "Apr 2021",
      organization: "Udacity",
    },
    {
      id: "3",
      title: "CS50's Introduction to Computer Science",
      date: "Sep 2020",
      organization: "Harvardx",
    },
  ],
};
