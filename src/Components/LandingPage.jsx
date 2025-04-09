import React, { useEffect, useState } from "react";
import pic3 from "../assets/img.jpg";

function LandingPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100); // delay to simulate "initial → animate"

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen bg-[##3F3B37] flex items-center justify-between px-[5vw] overflow-hidden">
      {/* Left Text Section */}
      <div className="w-1/2">
        <h1>Bashira Farhin</h1>
        <p>Full Stack Developer</p>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2">
        <img
          src={pic3}
          alt="Developer"
          className="w-[22vw] h-[22vw] object-cover rounded-full border-4 border-black shadow-xl"
        />
      </div>
    </div>
  );
}

export default LandingPage;
