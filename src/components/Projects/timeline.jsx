import { Chrono } from "react-chrono";
import classes from "../../styles/main.module.css";
import ProjectCard from "./ProjectCard";

function Timeline() {
  const items = [
    {
      title: "Personal Website",
      description:
        "What you're looking at right now! I love learning and challenging myself with new skills. This website will be a real-time update of where I am in my coding journey!",
      techstack: "React.js",
    },
    {
      title: "taxMe",
      description:
        "Developing a real-time grocery tax tracking app while grocery shopping! Utilizing Microsoft Azure's Computer Vision for price tag recognition for those of hard of seeing",
      techstack: "Microsoft Azure, Java, SpringBoot, React.js, TailwindCSS",
    },
    {
      title: "Raccoon Spotter",
      description:
        "   A web application that allows university students to post raccoon sightings on campus and to view the locations of other sightings on campus!",
      techstack: "Next.js, AWS DynamoDB & API Gateway",
      photo: "/img/raccoon-logo.svg",
    },
    {
      title: "words.io 🔗",
      url: "https://wordsio.netlify.app/",
      description:
        "A full stack web application created to practice learning English! Created as a present for a family member! ",
      techstack: "Next.js, mongoDB",
      photo: "/img/wordsio.png",
    },
    {
      title: "Every Second Devotion",
      description:
        "A devotional web app that generates descriptions for the passage of the day or on random. Created as a birthday gift! ",
      techstack: "Next.js, Express.js, Node.js",
      photo: "/img/logo.jpg",
    },
    {
      title: "Gesture Genius, Hack the North 2023 🔗",
      url: "https://devpost.com/software/gesture-genius-asl-ai-recognition",
      description:
        "An accessible ASL Translator utilizing Google Cloud's API and Teachable Machine AI Model. Created at Canada's largest hackathon, Hack the North @ the University of Waterloo",
      techstack: "HTML/CSS, JS, Ajax, Node.js, Google Cloud API",
      photo: "/img/gesture.png",
    },
    {
      title: "SFU Developers & Systems Club Website 🔗",
      url: "https://dnsclub.github.io/dnsWeb/",
      description:
        "The official website of SFU DNS Club website created with React.js",
      teckstack: "React.js, HTML/CSS",
      photo: "/img/DNSPoster.png",
    },
    {
      title: "AutoFill PDF",
      cardTitle: "AutoFill PDF",
      description:
        "A Python program I independently developed during my time at NCI as a seasonal student to help automate their onboarding contracts for the HR Department",
      techstack: "Python",
      media: {
        source: {
          url: "/img/password.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Weather App 🔗",
      url: "https://github.com/eunsongkoh/weather-app.py",
      description:
        "An application that provides real-time updates on weather conditions on user-inputted cities",
      techstack: "Python, Json, Requests, Open-Weather API, Tkinter GUI",
      photo: "/img/clouds.png",
    },
    {
      title: "Password Manager",
      url: "https://github.com/eunsongkoh/passwordVault.py",
      description: "A Python application that stores a database of passwords",
      techstack: "Python, SQLite3, Tkinter, HashLib",
      photo: "/img/password.png",
    },
    {
      title: "Kode with Klossy Data Science Scholar 2022",
      description:
        "Utilized Python and SQL to analyze global and national data on violence against women and provided insights into patterns and trends on a web application",
      techstack: "SQL, Python, Google Data Studio",
      photo: "/img/kwk.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 m-8">
      {items.map((item) => (
        <ProjectCard project={item} />
      ))}
    </div>
  );
}

export default Timeline;
