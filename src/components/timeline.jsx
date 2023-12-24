import { Chrono } from "react-chrono";
import classes from "./main.module.css";

function Timeline() {
  const items = [
    {
      title: "Personal Website",
      cardTitle: "Personal Website",
      cardSubtitle:
        "What you're looking at right now! I love learning and challenging myself with new skills. This website will be a real-time update of where I am in my coding journey!",
      cardDetailedText: "React.js",
    },
    {
      title: "Every Second Devotion, 2023",
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
      cardTitle: "Gesture Genius, Hack the North 2023",
      url: "https://devpost.com/software/gesture-genius-asl-ai-recognition",
      cardSubtitle:
        "An accessible ASL Translator utilizing Google Cloud's API and Teachable Machine AI Model",
      cardDetailedText: "HTML/CSS, JS, Ajax, Node.js, Google Cloud API",
      media: {
        source: {
          url: "/img/gesture.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "SFU Developers & Systems Club Official Website 2023",
      cardTitle: "SFU DNS Club Website",
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
      title: "AutoFill PDF 2023",
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
      title: "Weather App 2022",
      cardTitle: "Weather App",
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
      title: "Password Manager 2022",
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
      <h2>My Projects</h2>
      <section className={classes.theCards}>
        <div style={{ width: "100%", height: "100%" }}>
          <Chrono
            items={items}
            theme={{
              primary: "#8693AB",
              secondary: "#8693AB",
              titleColor: "white",
              titleColorActive: "#F4D6CC",
              cardTitleColor: "#8693AB",
            }}
            mode="HORIZONTAL"
          />
        </div>
      </section>
    </div>
  );
}

export default Timeline;
