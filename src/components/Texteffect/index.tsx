import { useEffect, useState } from "react";
import "./texteffect.css"; // Create a CSS file for styling

const FadeInOut = () => {
  const texts = [
    " branding for photographers",
    "  branding for wedding photographers",
    "    brand design for elopement photographers",
  ];
  const [visibleIndices, setVisibleIndices] = useState([0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndices((prevIndices) => {
        const nextIndex =
          (prevIndices[prevIndices.length - 1] + 1) % texts.length;
        return nextIndex === 0 ? [nextIndex] : [...prevIndices, nextIndex];
      });
    }, 1000); // Change text every 3 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (visibleIndices.length === texts.length) {
      // If all paragraphs are visible, reset visibleIndices after a delay
      const timeoutId = setTimeout(() => {
        setVisibleIndices([0]);
      }, 1000); // Wait 3 seconds before resetting
      return () => clearTimeout(timeoutId);
    }
  }, [visibleIndices]);

  return (
    <div className="fade-in-out-container">
      {texts.map((text, index) => (
        <p
          key={index}
          className={`fade-in-out-paragraph ${
            visibleIndices.includes(index) ? "visible" : ""
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default FadeInOut;
