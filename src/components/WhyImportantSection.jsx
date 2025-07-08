import React from "react";
import { FaWalking, FaHeartbeat, FaUsers, FaBrain } from "react-icons/fa";

const WhyImportantSection = () => {
  const benefits = [
    {
      title: "Active",
      benefit: "Improved Mobility",
      description:
        "Staying physically active helps maintain strength, flexibility, and balance, reducing the risk of falls and injuries.",
      icon: <FaWalking className="text-blue-600 text-3xl mb-3" />,
    },
    {
      title: "Independent",
      benefit: "Disease Prevention",
      description:
        "Leading an independent lifestyle encourages regular movement and healthy habits that reduce the risk of chronic diseases like diabetes and heart disease.",
      icon: <FaHeartbeat className="text-red-600 text-3xl mb-3" />,
    },
    {
      title: "Engaged",
      benefit: "Social Engagement",
      description:
        "Remaining socially engaged through community activities or hobbies helps prevent loneliness and improves emotional health.",
      icon: <FaUsers className="text-green-600 text-3xl mb-3" />,
    },
    {
      title: "Higher Quality of Life",
      benefit: "Mental Well-being",
      description:
        "An active, independent, and engaged lifestyle boosts self-esteem and keeps the mind sharp, contributing to overall mental well-being.",
      icon: <FaBrain className="text-purple-600 text-3xl mb-3" />,
    },
  ];

  return (
    <section className="  rounded-xl shadow-sm max-w-5xl mx-auto my-10 font-work-sans" style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Why it's important?
      </h2>

      <div className="grid  gap-6 sm:grid-cols-2">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-lg font-medium mb-3">{item.benefit}</p>
            <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyImportantSection;
