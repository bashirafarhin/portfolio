import React, { useEffect, useState } from "react";
import pic3 from "../assets/img/img.jpg";

function LandingPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100); // delay to simulate "initial → animate"

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen bg-[#f1f1f1] flex items-center justify-between px-[5vw] overflow-hidden">
      {/* Left Text Section */}
      <div
        className={`w-1/2 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-[4vw] font-bold text-gray-900">
          Full Stack Developer
        </h1>
        <p className="text-[1.3vw] mt-4 text-gray-600">
          Crafting clean, scalable web apps with modern technologies.
        </p>
      </div>

      {/* Right Image Section */}
      <div
        className={`w-1/2 flex justify-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
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
