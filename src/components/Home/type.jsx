import { useEffect, useRef } from "react";
import Typed from "typed.js";
import classes from "../../styles/main.module.css";

const Type = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student..", "Developer..", "Designer..", "Digital Creator.."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
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
