import { useState, useEffect } from "react";

export function useWindowWidth(intialWidth = 0) {
  const [windowWidth, setWindowWidth] = useState({
    width: process.browser ? window.innerWidth : intialWidth,
  });

  useEffect(() => {
    function getSize() {
      return {
        width: process.browser ? window.innerWidth : intialWidth,
      };
    }

    function handleResize() {
      setWindowWidth(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowWidth;
}
