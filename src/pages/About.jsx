import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShieldAlt, faMobileAlt, faHeartbeat, faBook, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import GovBanner from '../components/GovBanner';

const About = () => {
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
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Healthspan Lifespan Portal</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A pioneering initiative by NITI Aayog to empower every Indian citizen and the entire healthcare ecosystem with knowledge and tools to enhance healthspan—the years lived in good health.
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Healthspan Lifespan Portal is a pioneering initiative by NITI Aayog to empower every Indian citizen with knowledge and tools to enhance their healthspan—the years lived in good health. While medical advances have increased our lifespan, this portal focuses on ensuring those additional years are lived with vitality, purpose, and wellbeing.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <FontAwesomeIcon icon={faHeartbeat} className="mr-3" />
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To educate and enable citizens to make informed decisions about their health, transforming the way India approaches wellness—from treating illness to preventing disease and optimizing health throughout life.
            </p>
          </div>

          {/* Three Pillars Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Three Pillars of Healthspan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Financial Planning */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-blue-900 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Financial Planning</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Understanding healthcare costs across life stages</li>
                  <li>• Building health savings and insurance literacy</li>
                  <li>• Planning for long-term care needs</li>
                  <li>• Making informed decisions about health investments</li>
                </ul>
              </div>

              {/* Social Structures */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <FontAwesomeIcon icon={faUser} className="text-blue-900 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Social Structures</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Strengthening family and community support systems</li>
                  <li>• Creating age-friendly environments</li>
                  <li>• Building intergenerational connections</li>
                  <li>• Fostering social participation and inclusion</li>
                </ul>
              </div>

              {/* Individual Resilience */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-blue-900 text-4xl mb-3" />
                  <h3 className="text-xl font-semibold text-blue-900">Individual Resilience</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Promoting preventive health practices</li>
                  <li>• Building physical and mental strength</li>
                  <li>• Developing healthy lifestyle habits</li>
                  <li>• Empowering self-care and health monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faBook} className="text-blue-900 text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Educational Resources</h3>
                <p className="text-gray-700">Evidence-based information on nutrition, exercise, mental health, and disease prevention</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faMobileAlt} className="text-blue-900 text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Interactive Tools</h3>
                <p className="text-gray-700">Healthspan calculators, personalized wellness plans, and progress trackers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faShieldAlt} className="text-blue-900 text-3xl mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Policy Insights</h3>
                <p className="text-gray-700">Updates on government health schemes and initiatives</p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
              <FontAwesomeIcon icon={faAppleAlt} className="mr-3" />
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              An India where every citizen not only lives longer but lives better—where growing older means growing stronger, wiser, and more engaged with life.
            </p>
          </div>

          {/* Join the Movement Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-10 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Join the Movement</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Your healthspan is in your hands. Explore our resources and take the first step towards a healthier, more fulfilling life journey.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Explore Resources
              </button>
              <button className="bg-[#2D8686] text-white px-6 py-3 rounded-lg hover:bg-[#236666] transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Government Initiative Footer */}
          <div className="text-center py-8 border-t border-gray-200">
            <p className="text-gray-600 text-lg font-medium">An Initiative by NITI Aayog, Government of India</p>
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
};

export default About; 