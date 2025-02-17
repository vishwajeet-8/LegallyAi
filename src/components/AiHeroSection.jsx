import React from "react";
import { FileText, MessageSquare, ClipboardCheck } from "lucide-react";

const AiHeroSection = () => {
  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Transform Your Law
            <br />
            Firm with
            <br />
            <span className="text-[#68a2a2]">
              AI-Powered
              <br />
              Solutions
            </span>
          </h1>

          <p className="text-gray-300 text-xl mb-8 max-w-xl">
            Elevate your legal practice with cutting-edge technology. Our
            comprehensive suite of AI tools streamlines your workflow and
            enhances client experience.
          </p>

          <div className="flex gap-4 mb-16">
            <button className="bg-[#2b3875] text-white px-6 py-3 rounded-md hover:bg-[#232d5f] transition-colors">
              Explore Solutions
            </button>
            <button className="border border-[#68a2a2] text-[#68a2a2] px-6 py-3 rounded-md hover:bg-[#68a2a2] hover:text-black transition-colors">
              Request Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-12">
            <div>
              <p className="text-[#68a2a2] text-4xl font-bold">98%</p>
              <p className="text-gray-400">Time Saved</p>
            </div>
            <div>
              <p className="text-[#68a2a2] text-4xl font-bold">500+</p>
              <p className="text-gray-400">Law Firms</p>
            </div>
            <div>
              <p className="text-[#68a2a2] text-4xl font-bold">24/7</p>
              <p className="text-gray-400">AI Support</p>
            </div>
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="relative">
          <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#2b2b2b] relative z-10">
            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="bg-[#2b2b2b] rounded-lg p-4 flex items-center gap-4">
                <div className="bg-[#68a2a2] p-2 rounded-full">
                  <FileText className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    AI Document Extraction
                  </h3>
                  <p className="text-gray-400">Automated document processing</p>
                </div>
              </div>

              <div className="bg-[#2b2b2b] rounded-lg p-4 flex items-center gap-4">
                <div className="bg-[#68a2a2] p-2 rounded-full">
                  <MessageSquare className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Legal Research Chatbot
                  </h3>
                  <p className="text-gray-400">24/7 intelligent assistance</p>
                </div>
              </div>

              <div className="bg-[#2b2b2b] rounded-lg p-4 flex items-center gap-4">
                <div className="bg-[#68a2a2] p-2 rounded-full">
                  <ClipboardCheck className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Auto-Drafting</h3>
                  <p className="text-gray-400">Smart document generation</p>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#68a2a2] opacity-5 blur-xl rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default AiHeroSection;
