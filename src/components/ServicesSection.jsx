import React from "react";
import {
  FileText,
  MessageSquare,
  ClipboardCheck,
  Mail,
  Eye,
  Clock,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "AI Document Extraction",
      description:
        "Automatically extract and process legal documents with high accuracy using advanced AI algorithms.",
      features: ["Quick Processing", "High Accuracy", "Data Organization"],
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Legal Research Chatbot",
      description:
        "24/7 AI-powered legal research assistant to help with case law and precedents.",
      features: ["Instant Responses", "Case Law Database", "Smart References"],
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: "Auto-Drafting",
      description:
        "Generate legal documents automatically with AI-powered templates and customization.",
      features: ["Smart Templates", "Custom Fields", "Version Control"],
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Case Management System",
      description:
        "Comprehensive case management with automated workflows and tracking.",
      features: ["Task Automation", "Progress Tracking", "Client Portal"],
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Case Studies Platform",
      description:
        "Showcase your success stories and attract potential clients with detailed case studies.",
      features: [
        "SEO Optimization",
        "Rich Media Support",
        "Analytics Integration",
      ],
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Appointment Booking",
      description:
        "Streamlined booking system with integrated payment processing and scheduling.",
      features: ["Online Payments", "Calendar Sync", "Automated Reminders"],
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2b3875] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive AI-Powered Solutions for Law Firms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#2b3875] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-[#2b3875] text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
