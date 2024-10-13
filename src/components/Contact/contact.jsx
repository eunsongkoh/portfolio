import classes from "../../styles/main.module.css";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div className={classes.contactInfo}>
        <div>
          <a
            href="https://www.linkedin.com/in/songkoh/"
            className="flex items-center space-x-2"
          >
            <CiLinkedin style={{ fill: "#eafc88" }} />
            <h3 className="text-center">connect on linkedin</h3>
          </a>
        </div>

        <div>
          <a
            href="mailto: eka74@sfu.ca"
            className="flex items-center space-x-2"
          >
            <AiOutlineMail style={{ fill: "#eafc88" }} />{" "}
            <h3 className="text-center">send me an email</h3>
          </a>
        </div>

        <div>
          <a
            href="https://github.com/eunsongkoh"
            className="flex items-center space-x-2"
          >
            <AiFillGithub style={{ fill: "#eafc88" }} />{" "}
            <h3 className="text-center">my github</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
