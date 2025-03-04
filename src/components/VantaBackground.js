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
      highlightColor: 0x646464,
      midtoneColor: 0x141414,
      lowlightColor: 0x2d2d2f,
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

  return <div id="vanta-background" className="vanta-background"></div>;
};

export default VantaBackground;
