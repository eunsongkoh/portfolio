import classes from "./main.module.css";
import Button from "@material-ui/core/Button";
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
        <h3>Hi, My name is Song!</h3>
        <br style={{ lineHeight: "1px" }} />
        <h4>
          I'm a 2nd Year Computing Science student at Simon Fraser University.
          I'm passionate about all things technology! I think it's awesome how
          we can bring creative ideas and solutions to real-world problems with
          something as technical as a computer.
        </h4>
        <br></br>
        <h4>
          Outside of programming, I love <b>digital design</b>. Currently, I'm:{" "}
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
      </div>
      <div className={classes.skills}>
        <h3>Languages, Frameworks, Technology </h3>
        <div className={classes.icons}>
          <i class="devicon-c-plain"></i>
          <i class="devicon-cplusplus-plain"></i>
          <i class="devicon-python-plain"></i>
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-typescript-plain"></i>
          <i class="devicon-angularjs-plain"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-nextjs-original-wordmark"></i>
          <i class="devicon-nodejs-plain-wordmark"></i>
          <i class="devicon-tailwindcss-original-wordmark"></i>
          <i class="devicon-bootstrap-plain"></i>
          <i class="devicon-mongodb-plain-wordmark"></i>
          <i class="devicon-github-original-wordmark"></i>
        </div>
        <h5>
          C/C++, Python, HTML5, CSS3, Javascript, Typescript, AngularJS,
          React.js, Next.js, Node.js, Tailwind CSS, BootStrap, mongoDB, Github
        </h5>
      </div>
    </div>
  );
}

export default About;
