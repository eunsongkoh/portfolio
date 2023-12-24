import { InstagramEmbed } from "react-social-media-embed";
import classes from "./main.module.css";

const Multimedia = () => {
  return (
    <div className={classes.multimedia} id="multimedia">
      <h2>Multimedia</h2>
      <h5>
        I have a huge passion for digital design! Currently, I'm a <br></br>
        <i>
          <big>Video Editor @ SFU Computing Science Student Society</big>
        </i>{" "}
        <br></br>
        <br></br>
        <i>
          <big>
            Director of Communications and Multimedia @ SFU Developers & Systems
            Club
          </big>
        </i>
      </h5>
      <h4>Some of my work</h4>
      <div className={classes.social}>
        <div style={{ display: "flex", justifyContent: "left" }}>
          <InstagramEmbed
            url="https://www.instagram.com/reel/CyE7V65tl4h/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            width={328}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/p/CyAX1CPu3K5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
            width={328}
          />
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
