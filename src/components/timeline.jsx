import { Chrono } from "react-chrono";
import classes from "./main.module.css";

function Timeline() {
  const items = [
    {
      title: "Personal Website, Current",
      cardTitle: "Personal Website",
      cardSubtitle:
        "What you're looking at right now! I love learning and challenging myself with new skills. This website will be a real-time update of where I am in my coding journey!",
      cardDetailedText: "React.js",
    },
    {
      title: "Raccoon Spotter",
      cardTitle: "Raccoon Spotter",
      cardSubtitle:
        "A web application that allows university students to post raccoon sightings on campus and to view the locations of other sightings on campus!",
      cardDetailedText: "Next.js, AWS DynamoDB & API Gateway",
      media: {
        source: {
          url: "/img/raccoon-logo.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "words.io",
      cardTitle: "words.io 🔗",
      url: "https://wordsio.netlify.app/",
      cardSubtitle:
        "A full stack web application created to practice learning English! Created as a present for a family member! ",
      cardDetailedText: "Next.js, mongoDB",
      media: {
        source: {
          url: "/img/wordsio.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Every Second Devotion",
      cardTitle: "Every Second Devotion",
      cardSubtitle:
        "A devotional web app that generates descriptions for the passage of the day or on random. Created as a birthday gift! ",
      cardDetailedText: "Next.js, Express.js, Node.js",
      media: {
        source: {
          url: "/img/logo.jpg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Gesture Genius, Hack the North 2023",
      cardTitle: "Gesture Genius, Hack the North 2023 🔗",
      url: "https://devpost.com/software/gesture-genius-asl-ai-recognition",
      cardSubtitle:
        "An accessible ASL Translator utilizing Google Cloud's API and Teachable Machine AI Model. Created at Canada's largest hackathon, Hack the North @ the University of Waterloo",
      cardDetailedText: "HTML/CSS, JS, Ajax, Node.js, Google Cloud API",
      media: {
        source: {
          url: "/img/gesture.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "SFU Developers & Systems Club Website",
      cardTitle: "SFU DNS Club Website 🔗",
      url: "https://dnsclub.github.io/dnsWeb/",
      cardSubtitle:
        "The official website of SFU DNS Club website created with React.js",
      cardDetailedText: "React.js, HTML/CSS",
      media: {
        source: {
          url: "/img/DNSPoster.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "AutoFill PDF",
      cardTitle: "AutoFill PDF",
      cardSubtitle:
        "A Python program I independently developed during my time at NCI as a seasonal student to help automate their onboarding contracts for the HR Department",
      cardDetailedText: "Python",
      media: {
        source: {
          url: "/img/password.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Weather App",
      cardTitle: "Weather App 🔗",
      url: "https://github.com/eunsongkoh/weather-app.py",
      cardSubtitle:
        "An application that provides real-time updates on weather conditions on user-inputted cities",
      cardDetailedText: "Python, Json, Requests, Open-Weather API, Tkinter GUI",
      media: {
        source: {
          url: "/img/clouds.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Password Manager",
      cardTitle: "Password Manager",
      url: "https://github.com/eunsongkoh/passwordVault.py",
      cardSubtitle: "A Python application that stores a database of passwords",
      cardDetailedText: "Python, SQLite3, Tkinter, HashLib",
      media: {
        source: {
          url: "/img/password.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Kode with Klossy Data Science Scholar 2022",
      cardTitle: "KWK Data Science Scholar 2022",
      cardSubtitle:
        "Utilized Python and SQL to analyze global and national data on violence against women and provided insights into patterns and trends on a web application",
      cardDetailedText: "SQL, Python, Google Data Studio",
      media: {
        source: {
          url: "/img/kwk.jpg",
        },
        type: "IMAGE",
      },
    },
  ];
  return (
    <div className={classes.projects} id="projects">
      <section className={classes.theCards}>
        <div style={{ width: "100%", height: "100%" }}>
          <Chrono
            items={items}
            theme={{
              primary: "#BDB4FF",
              secondary: "#F0F8FF10",
              titleColor: "#BDB4FF",
              cardSubtitleColor: "#f5f5f5",
              cardDetailsColor: "#f5f5f5",
              titleColorActive: "#f5f5f5",
              cardTitleColor: "#f5f5f5",
              cardBgColor: "#F0F8FF10",
            }}
            mode="HORIZONTAL"
          />
        </div>
      </section>
    </div>
  );
}

export default Timeline;
