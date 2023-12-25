import { Element } from "react-scroll";
import classes from "./App.module.css";
import Multimedia from "./components/multimedia";
import Navbar from "./components/nav";
import Timeline from "./components/timeline";
import ScrollToTopButton from "./components/scrollBtn";
import Type from "./components/type";
import About from "./components/about";
import Contact from "./components/contact";

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
