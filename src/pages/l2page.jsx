import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emblem from '../assets/Emblem_of_India.svg';
import l2 from '../assets/l2.svg';
import { faBaby, faUtensils, faSyringe, faFileMedical, faMicrochip, faDna, faSatellite, faCube } from '@fortawesome/free-solid-svg-icons';

const Ls2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    alert('Registration process started!');
  };

  return (
    <>
      {/* Government Banner */}
      <div className="bg-blue-900 text-white text-center py-2 flex justify-center items-center space-x-4">
        <img src={Emblem} alt="Ashoka Emblem" className="h-8" />
        <span className="font-semibold">Government of India | SwasthBharath</span>
      </div>

      <Navbar />

      <div className="min-h-screen bg-gray-50 font-work-sans">
        <div className="container mx-auto py-8 px-4">
          {/* Header Section */}
          <div className="text-center mb-10 relative">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Neonatal & Infant Care <span className="text-2xl md:text-2xl font-bold text-blue-900">(0-1 year)</span></h1>
           
            <p className="text-gray-600 mt-2">Building a Strong Foundation for Life</p>
         <img src={l2} alt="Decorative" className="absolute -top-6 right-0 h-24 w-auto md:h-32 md:w-auto" style={{ zIndex: 1 }} /> 
          </div>

          {/* Envisioned Health Ecosystem */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Envisioned Health Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faBaby} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Monitoring & Developmental Screening</h3>
              <p className="text-gray-700 mb-4">Regular tracking of physical growth and developmental milestones to detect delays early and enable timely intervention.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faUtensils} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nutrition Support</h3>
              <p className="text-gray-700 mb-4">Ensuring adequate breastfeeding, complementary feeding, and micronutrient supplementation for healthy growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faSyringe} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Immunization</h3>
              <p className="text-gray-700 mb-4">Providing timely vaccinations to protect infants against preventable infectious diseases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faFileMedical} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Newborn Screening</h3>
              <p className="text-gray-700 mb-4">Early screening for genetic, metabolic, and hormonal disorders to initiate prompt treatment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faFileMedical} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Birth Registration & Vital Statistics</h3>
              <p className="text-gray-700 mb-4">Ensuring legal identity and inclusion in health and social programs through timely birth registration.</p>
            </div>
          </div>

          {/* Enabling Frontier Technologies */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Enabling Frontier Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faMicrochip} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Incubators</h3>
              <p className="text-gray-700 mb-4">Advanced incubators with real-time monitoring to regulate temperature, humidity, and oxygen for preterm infants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faDna} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Genomic Screening & Personalized Medicine</h3>
              <p className="text-gray-700 mb-4">Utilizing genetic testing for early detection of hereditary disorders and tailoring treatment plans accordingly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faSatellite} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT-enabled Vaccination Tracking</h3>
              <p className="text-gray-700 mb-4">Real-time tracking of vaccination schedules and delivery through connected devices to improve coverage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faCube} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3D Printing of Medical Devices</h3>
              <p className="text-gray-700 mb-4">On-demand production of custom medical equipment and neonatal care tools using 3D printing technology.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white p-10 text-center mb-0">
          <h2 className="text-2xl font-bold mb-4">Start Your Child's Healthy Journey Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Early Intervention</h3>
              <p className="text-gray-200">Detect issues early and act fast.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Better Outcomes</h3>
              <p className="text-gray-200">Leverage technology for healthier babies.</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Connected Care</h3>
              <p className="text-gray-200">Stay informed with real-time updates.</p>
            </div>
          </div>
          {!isLoggedIn ? (
            <div>
              <button
                onClick={handleRegister}
                className="bg-[#2D8686] text-white px-6 py-2 rounded-md hover:bg-orange-600 mr-4"
              >
                Register
              </button>
              <button
                onClick={handleLogin}
                className="bg-white text-blue-900 px-6 py-2 rounded-md hover:bg-gray-100"
              >
                Login
              </button>
            </div>
          ) : (
            <p className="text-gray-200">Welcome! You are logged in.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ls2;
