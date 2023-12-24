import { useEffect, useRef } from "react";
import Typed from "typed.js";
import classes from "./main.module.css";

const Type = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student", "Developer", "Designer"],
      startDelay: 300,
      typeSpeed: 300,
      backSpeed: 200,
      backDelay: 200,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h2 className={classes.typed}>
      <span ref={el}></span>{" "}
    </h2>
  );
};

export default Type;
