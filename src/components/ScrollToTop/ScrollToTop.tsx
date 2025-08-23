import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FloatingButton, ButtonText } from "./styled";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(scrollTop > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FloatingButton
      onClick={scrollToTop}
      isVisible={isVisible}
      aria-label="Scroll to top"
    >
      <KeyboardArrowUpIcon />
      <ButtonText>UP</ButtonText>
    </FloatingButton>
  );
};

export default ScrollToTop;
