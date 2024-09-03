import { scroller } from "react-scroll";
import { Button } from "@mui/material";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroller.scrollTo("intro", {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Button
      variant="contained"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#eafc88",
        zIndex: 1000,
        color: "black", // Add this line to make the text color black
      }}
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};

export default ScrollToTopButton;
