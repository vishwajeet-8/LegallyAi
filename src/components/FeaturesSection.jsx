import React from "react";
import { FileText, Calendar, MessageSquare } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Smart Document Analysis",
      description:
        "Advanced AI algorithms that extract, analyze, and categorize legal documents with high precision.",
      benefits: ["99.9% Accuracy Rate", "Multi-format Support"],
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Automated Scheduling",
      description:
        "Intelligent appointment booking system with integrated payment processing.",
      benefits: ["Real-time Availability", "Secure Payments"],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "AI Legal Assistant",
      description:
        "24/7 intelligent chatbot for legal research and quick client inquiries.",
      benefits: ["Natural Language Processing", "Instant Responses"],
    },
  ];

  return (
    <div className="bg-black min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-[#68a2a2] text-xl">
            Advanced tools to transform your law practice
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#68a2a2] opacity-5 group-hover:opacity-10 blur-xl rounded-lg transition-opacity"></div>

              {/* Card Content */}
              <div className="relative bg-[#1a1a1a] rounded-lg p-8 border border-[#2b2b2b]">
                {/* Icon */}
                <div className="bg-[#2b3875] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{feature.description}</p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg
                        className="w-4 h-4 mr-2 text-[#68a2a2]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* See All Features Button */}
        <div className="text-center">
          <button className="inline-flex items-center bg-[#2b3875] text-white px-8 py-3 rounded-md hover:bg-[#232d5f] transition-colors">
            See All Features
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
