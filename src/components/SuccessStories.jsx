import React from "react";
import {
  Clock,
  TrendingUp,
  Users,
  Star,
  ArrowUpRight,
  DollarSign,
} from "lucide-react";

const SuccessStories = () => {
  const caseStudies = [
    {
      category: "Corporate Law",
      duration: "3 months",
      company: "Johnson & Associates",
      percentage: "300%",
      metric: "Increase in Efficiency",
      description:
        "Implemented AI document extraction and auto-drafting, reducing document processing time from hours to minutes.",
      benefits: ["Time Saved", "ROI Achieved"],
      icons: [Clock, TrendingUp],
    },
    {
      category: "Family Law",
      duration: "6 months",
      company: "Smith Legal Group",
      percentage: "200%",
      metric: "Client Engagement",
      description:
        "Integrated chatbot and appointment booking system resulted in improved client satisfaction and engagement.",
      benefits: ["Client Growth", "5-Star Rating"],
      icons: [Users, Star],
    },
    {
      category: "Criminal Law",
      duration: "4 months",
      company: "Wilson Defense",
      percentage: "150%",
      metric: "Revenue Growth",
      description:
        "Legal research chatbot implementation led to faster case preparation and increased client acquisition.",
      benefits: ["Case Success", "Cost Reduction"],
      icons: [ArrowUpRight, DollarSign],
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2b3875] mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">
            See how law firms transformed their practice with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-[#68a2a2] text-white px-4 py-1 rounded-full text-sm">
                  {study.category}
                </span>
                <span className="text-gray-500">{study.duration}</span>
              </div>

              <h3 className="text-[#2b3875] text-xl font-semibold mb-4">
                {study.company}
              </h3>

              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-[#2b3875] text-2xl font-bold">
                    {study.percentage}
                  </span>
                  <span className="text-gray-600">{study.metric}</span>
                </div>
                {/* <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-[#2b3875] rounded-full"
                    style={{ width: study.percentage }}
                  ></div>
                </div> */}
              </div>

              <p className="text-gray-600 mb-6">{study.description}</p>

              <div className="flex gap-6">
                {study.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-[#68a2a2] gap-2"
                  >
                    {React.createElement(study.icons[idx], { size: 16 })}
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center bg-[#2b3875] text-white px-8 py-3 rounded-md hover:bg-[#232d5f] transition-colors">
            View More Case Studies
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

export default SuccessStories;
