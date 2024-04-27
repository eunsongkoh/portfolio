import { Element } from "react-scroll";
import classes from "./App.module.css";
import Multimedia from "./components/Multimedia/multimedia";
import Navbar from "./components/Nav/nav";
import Timeline from "./components/Projects/timeline";
import ScrollToTopButton from "./components/Home/scrollBtn";
import Type from "./components/Home/type";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <main>
      <ScrollToTopButton />
      <div className={classes.intro}>
        <Element name="intro">
          <div className={classes.theTitle}>
            <h1 className={classes.title}> eunsong koh</h1>
            <br />
            <Type />
            <Navbar />
          </div>
        </Element>
      </div>
      <Element name="about">
        <div className={classes.about}>
          <h2>About Me</h2>
          <About />
        </div>
      </Element>
      <Element name="experience">
        <div className={classes.experience}>
          <h2>Experience</h2>
          <Experience />
        </div>
      </Element>
      <Element name="projects">
        <div className={classes.projects}>
          <h2>Projects</h2>
          <Timeline />
        </div>
      </Element>
      <Element name="multimedia">
        <div className={classes.multimedia}>
          <h2>Multimedia</h2>
          <Multimedia />
        </div>
      </Element>
      <Element name="contact">
        <div className={classes.contact}>
          <h2>Contact Me</h2>
          <Contact />
        </div>
      </Element>
    </main>
  );
}

export default App;
