import { scroller } from "react-scroll";
import Button from "@material-ui/core/Button";

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
        top: " 20px",
        right: "20px",
        backgroundColor: "#eafc88",
      }}
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};

export default ScrollToTopButton;
