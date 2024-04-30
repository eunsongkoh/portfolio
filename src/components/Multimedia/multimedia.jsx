import { InstagramEmbed } from "react-social-media-embed";
import classes from "../../styles/main.module.css";
import Video from "../About/Video";

const Multimedia = () => {
  return (
    <div className={classes.multimedia}>
      <div
        style={{
          display: "flex",
          margin: "1em",
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
        }}
      >
        <InstagramEmbed
          url="https://www.instagram.com/p/C4WRtnduBvl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          width={328}
        />
      </div>
      <Video />
    </div>
  );
};

export default Multimedia;
