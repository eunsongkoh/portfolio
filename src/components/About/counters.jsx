import React, { useEffect } from "react";
import { PureCounter } from "@srexi/purecounterjs";

function Counter() {
  useEffect(() => {
    const counterElement = document.querySelector(".purecounter");

    const pure = new PureCounter(
      {
        end: 7,
        duration: 5,
        delay: 10,
        once: false,
      },
      counterElement
    );

    return () => {
      pure.destroy();
    };
  }, []);
  return (
    <p>
      Languages Learned: <span className="purecounter">0</span>
    </p>
  );
}

export default Counter;
