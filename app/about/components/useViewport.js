"use client"
import { useState, useEffect } from "react";

const useViewport = () => {
  // Initialize state with a fallback value (e.g., 0) for SSR
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Ensure `window` is defined (client-side only)
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
};

export default useViewport;