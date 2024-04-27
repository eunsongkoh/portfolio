import React from "react";
import classes from "../../styles/main.module.css";

function Video() {
  return (
    <div>
      <iframe
        className={classes.video}
        src="https://www.youtube.com/embed/oLi7MGQ4aXc?si=_h3dkQHVYl2dfFLF"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
