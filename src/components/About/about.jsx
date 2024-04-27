import classes from "../../styles/main.module.css";
import { Button } from "@mui/material";
import { scroller } from "react-scroll";
import Video from "./Video";

function About() {
  const scrollToM = () => {
    scroller.scrollTo("multimedia", {
      duration: 500,
      smooth: true,
    });
  };
  return (
    <div className={classes.about}>
      <div className={classes.blurb}>
        <h3>Hi, My name is Song! 🙋🏻‍♀️</h3>
        <h4>
          I'm a 2nd Year Computing Science student at Simon Fraser University.
          I'm passionate about all things technology! I think it's awesome how
          we can bring creative ideas and solutions to real-world problems with
          something as technical as a computer.
        </h4>

        <h4>
          Outside of programming, I love <b>digital design</b>. Currently, I'm
          the: <br></br>
          <br></br>
          <b>- Director of Communication and Multimedia</b> @ SFU Developers and
          Systems Club <br></br>
          <b>- Video Editor</b> @ SFU Computing Science Student Society (CSSS)
        </h4>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#eafc88",
            color: "#000000",
            margin: "1em",
          }}
          onClick={scrollToM}
        >
          check out my multimedia here
        </Button>
        <br></br>
      </div>
    </div>
  );
}

export default About;