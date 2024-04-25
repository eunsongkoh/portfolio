import { InstagramEmbed } from "react-social-media-embed";
import classes from "./main.module.css";

const Multimedia = () => {
  return (
    <div className={classes.multimedia} id="multimedia">
      <h4>
        Here's some of my work with the SFU Developers and Systems Club and the
        SFU Computing Science Student Society (CSSS)!
      </h4>
      <div className={classes.social}>
        <div
          style={{
            display: "flex",
            margin: "1em",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/reel/C0j23_KPkVt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            width={328}
          />
        </div>
        <div
          style={{
            display: "flex",
            margin: "1em",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/p/C4WRtnduBvl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            width={328}
          />
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
