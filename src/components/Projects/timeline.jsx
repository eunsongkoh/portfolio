import ProjectCard from "./ProjectCard";

function Timeline() {
  const items = [
    {
      title: "autoM8, Hack the North 2024 🔗",
      url: "https://devpost.com/software/autom8",
      description:
        "An app that allows you to apply edits on a mass amount of files and have them uploaded to the cloud at once with MASV API! It supports functions such as edge detection or video stabilization, as well as a summarizer tool for large CSV's or spreadsheets with Cohere's AI API.",
      techstack: "Next.js, Python, Defang, MASV, Cohere AI API, Typescript",
      photo: "/img/autom8.jpg",
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
    // {
    //   title: "Every Second Devotion",
    //   description:
    //     "A devotional web app that generates descriptions for the passage of the day or on random. Created as a birthday gift! ",
    //   techstack: "Next.js, Express.js, Node.js",
    //   photo: "/img/logo.jpg",
    // },
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
      url: "https://sfudns.co",
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
