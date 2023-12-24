import React, { useEffect } from "react";
import { PureCounter } from "@srexi/purecounterjs";

function Counter() {
  useEffect(() => {
    // Select the span element where you want to apply the counter
    const counterElement = document.querySelector(".purecounter");

    // Initialize PureCounter with the specified options
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
