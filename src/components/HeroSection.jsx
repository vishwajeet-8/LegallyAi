import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black min-h-[600px] flex items-center justify-center text-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-6xl font-extrabold mb-4">
          Transform Your Law Firm's
          <br />
          <span className="text-[#68a2a2]">Digital Presence</span>
        </h1>

        <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
          Revolutionize your legal practice with AI-powered solutions. From
          document extraction to legal research chatbots, we bring innovation to
          your firm.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-[#2b3875] text-white px-8 py-3 rounded-md text-lg hover:bg-[#232d5f] transition-colors">
            Get Started
          </button>
          <button className="bg-white text-[#2b3875] px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
