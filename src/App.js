import { Element, scroller } from "react-scroll";
import classes from "./App.module.css";
import Multimedia from "./components/multimedia";
import Navbar from "./components/nav";
import Timeline from "./components/timeline";
import ScrollToTopButton from "./components/scrollBtn";
import Type from "./components/type";
import About from "./components/about";

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
    </main>
  );
}

export default App;
