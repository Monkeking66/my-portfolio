import React, { useEffect } from "react";
import Vanta from "vanta/dist/vanta.fog.min.js"; // Import the Vanta effect

const VantaBackground = () => {
  useEffect(() => {
    const vantaEffect = Vanta({
      el: "#vanta-background", // The element ID to apply the Vanta effect
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x645d5d,
      midtoneColor: 0x90909,
      lowlightColor: 0x515052,
      baseColor: 0x0,
      blurFactor: 0.35,
      speed: 0.70
    });

    // Cleanup the effect when the component unmounts
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy(); // Destroy the effect to prevent memory leaks
      }
    };
  }, []);

  return (
    <div
      id="vanta-background"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensures it's behind your content
      }}
    />
  );
};

export default VantaBackground;
