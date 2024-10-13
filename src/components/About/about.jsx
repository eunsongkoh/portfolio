import classes from "../../styles/main.module.css";
import { Button } from "@mui/material";
import { scroller } from "react-scroll";

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

        <h4 style={{ lineHeight: "1.5", fontWeight: "normal" }}>
          I'm a{" "}
          <b>
            <span className="underline decoration-4 decoration-pink-400">
              3rd Year Computing Science student at Simon Fraser University
            </span>
          </b>
          . I'm passionate about all things technology!
          <br></br>I think it's awesome how we can bring creative ideas and
          solutions to real-world problems with something as technical as a
          computer.
        </h4>

        <h4 style={{ lineHeight: "1.5", fontWeight: "normal" }}>
          Outside of programming, I love{" "}
          <b>
            <span className="underline decoration-4 decoration-pink-400">
              digital design
            </span>
          </b>
          . Currently, I'm the:
          <br style={{ lineHeight: "2" }}></br>
          <br></br>
          <b>
            <span className="underline decoration-4 decoration-lime-200">
              Director of Communication and Multimedia
            </span>
          </b>{" "}
          <br></br>
          <i>@ SFU Developers and Systems Club </i>
          <br></br>
          <br></br>
          <b>
            <span className="underline decoration-4 decoration-lime-200">
              Video Editor
            </span>
          </b>{" "}
          <br></br>
          <i>@ SFU Computing Science Student Society (CSSS)</i>
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
      <div className="flex justify-center items-center">
        <div style={{ width: "80%", margin: "2em" }}>
          <img
            className="rounded-2xl bg-white/15 backdrop-blur-sm z-10"
            src="/img/coding.jpeg"
            alt="Coding on a laptop"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
