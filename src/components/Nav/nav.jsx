import { Link } from "react-scroll";
import classes from "./nav.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className="">
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} duration={1000}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="experience" spy={true} smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="multimedia" spy={true} smooth={true} duration={1000}>
              Multimedia
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
