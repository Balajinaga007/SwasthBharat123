import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGraduationCap, faUsers, faLightbulb, faCog, faHeart } from '@fortawesome/free-solid-svg-icons';
import GovBanner from '../components/GovBanner';

const KnowledgeCenter = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Government Banner */}
      <GovBanner />

      <Navbar />

      <div className="min-h-screen bg-gray-50 font-work-sans">
        <div className="container mx-auto py-8 px-4">
          {/* Header Section with WIP Badge */}
          <div className="text-center mb-10">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm mr-4">
                WIP - Work in Progress
              </span>
              <FontAwesomeIcon icon={faCog} className="text-orange-500 text-2xl animate-spin" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Knowledge Center</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your comprehensive resource hub for evidence-based health information and expert insights to enhance your healthspan journey.
            </p>
          </div>

          {/* WIP Notice */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 mb-10 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
              <FontAwesomeIcon icon={faCog} className="mr-3" />
              Currently Under Development
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We're working hard to bring you the most comprehensive and up-to-date health knowledge platform. 
              Our team of experts is curating high-quality content to support your health and wellness journey.
            </p>
          </div>

          {/* Purpose Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FontAwesomeIcon icon={faLightbulb} className="mr-3 text-blue-900" />
              Purpose of the Knowledge Center
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Knowledge Center serves as a centralized platform to provide citizens with access to the latest developments, 
              research findings, and expert content from healthcare professionals across the industry. Our goal is to empower 
              every Indian citizen with reliable, evidence-based information that can help them make informed decisions to 
              expand their lifespan and improve their healthspan.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Objectives:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Democratize access to expert health knowledge</li>
                <li>• Bridge the gap between medical research and public understanding</li>
                <li>• Provide actionable insights for healthspan optimization</li>
                <li>• Support evidence-based decision making in health matters</li>
              </ul>
            </div>
          </div>

          {/* What's Coming Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Expert Articles */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-blue-900 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Expert Articles</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Peer-reviewed research summaries</li>
                  <li>• Clinical insights from healthcare professionals</li>
                  <li>• Evidence-based health recommendations</li>
                  <li>• Latest medical breakthroughs</li>
                </ul>
              </div>

              {/* Educational Resources */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-blue-900 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Educational Content</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Interactive learning modules</li>
                  <li>• Health literacy programs</li>
                  <li>• Webinars and expert talks</li>
                  <li>• Practical health guides</li>
                </ul>
              </div>

              {/* Community Insights */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <FontAwesomeIcon icon={faUsers} className="text-blue-900 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Community Insights</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Success stories and case studies</li>
                  <li>• Expert Q&A sessions</li>
                  <li>• Community-driven content</li>
                  <li>• Regional health initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Categories Section */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
              <FontAwesomeIcon icon={faHeart} className="mr-3" />
              Content Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Preventive Healthcare</h3>
                <p className="text-gray-700">Early detection, screening guidelines, and preventive measures for common health conditions.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Nutrition & Wellness</h3>
                <p className="text-gray-700">Evidence-based nutrition advice, meal planning, and lifestyle modification strategies.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Mental Health</h3>
                <p className="text-gray-700">Stress management, mindfulness practices, and psychological well-being resources.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-3">Technology & Innovation</h3>
                <p className="text-gray-700">Latest health technologies, digital health tools, and innovative treatment approaches.</p>
              </div>
            </div>
          </div>

          {/* Stay Updated Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Stay Updated</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Be the first to know when our Knowledge Center goes live. We'll notify you when new expert content and resources become available.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Notify Me
              </button>
              <button className="bg-[#2D8686] text-white px-6 py-3 rounded-lg hover:bg-[#236666] transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Government Initiative Footer */}
          <div className="text-center py-8 border-t border-gray-200">
            <p className="text-gray-600 text-lg font-medium">An Initiative by NITI Aayog, Government of India</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contributing to India's Health Knowledge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Expert Contributors</h3>
            <p className="text-gray-200">Healthcare professionals sharing their expertise.</p>
          </div>
          <div className="bg-blue-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Quality Assurance</h3>
            <p className="text-gray-200">Rigorous review process for all content.</p>
          </div>
        </div>
        <div>
          <button className="bg-[#2D8686] text-white px-6 py-2 rounded-md hover:bg-[#236666] mr-4">
            Become a Contributor
          </button>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-md hover:bg-gray-100">
            Partnership Opportunities
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default KnowledgeCenter; 