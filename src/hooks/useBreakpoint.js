import { useState, useEffect } from "react";

const breakpoints = {
  sm: "(max-width: 767px)",
  md: "(min-width: 768px) and (max-width: 1023px)",
  lg: "(min-width: 1024px) and (max-width: 1639px)",
  xl: "(min-width: 1640px)",
};

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("sm");

  useEffect(() => {
    const checkBreakpoints = () => {
      if (window.matchMedia(breakpoints.xl).matches)
        setBreakpoint("xl"); // Check XL first
      else if (window.matchMedia(breakpoints.lg).matches) setBreakpoint("lg");
      else if (window.matchMedia(breakpoints.md).matches) setBreakpoint("md");
      else setBreakpoint("sm");
    };

    checkBreakpoints();
    window.addEventListener("resize", checkBreakpoints);
    return () => window.removeEventListener("resize", checkBreakpoints);
  }, []);

  return {
    isMobile: breakpoint === "sm",
    isTablet: breakpoint === "md",
    isDesktop: breakpoint === "lg",
    isWide: breakpoint === "xl",
    current: breakpoint,
  };
}
