import classes from "./main.module.css";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div className={classes.contactInfo}>
        <a
          href="https://www.linkedin.com/in/songkoh/"
          className={classes.links}
        >
          <CiLinkedin style={{ fill: "#eafc88" }} /> chat with me on linkedin
        </a>
        <br></br>
        <br></br>

        <a href="mailto: eka74@sfu.ca" className={classes.links}>
          <AiOutlineMail style={{ fill: "#eafc88" }} /> send me an email
        </a>
        <br></br>
        <br></br>

        <a href="https://github.com/eunsongkoh" className={classes.links}>
          <AiFillGithub style={{ fill: "#eafc88" }} /> my github
        </a>
      </div>
    </div>
  );
}

export default Contact;
