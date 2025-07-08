import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emblem from '../assets/Emblem_of_India.svg';
import l1 from  '../assets/l1.svg';

import { faUser, faShieldAlt, faMobileAlt, faHeartbeat, faBook, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

const Ls4 = () => {
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
            {/* <img src="/path-to-ministry-logo.png" alt="Ministry Logo" className="h-16 mx-auto mb-4" /> */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Prenatal and Maternal Care</h1>
            <p className="text-gray-600 mt-2">Empowering maternal health from conception to childbirth</p>
            {/* <img src={l1} alt="Decorative" className="absolute -top-6 right-0 h-24 w-auto md:h-32 md:w-auto" style={{zIndex: 1}} /> */}
          </div>

          {/* Envisioned Health Ecosystem */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Envisioned Health Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faHeartbeat} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Antenatal Care</h3>
              <p className="text-gray-700 mb-4">Ensures a safe pregnancy through regular check-ups, screenings, and timely medical guidance for expectant mothers.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faAppleAlt} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Folic Acid & Iron Supplementation</h3>
              <p className="text-gray-700 mb-4">Provides essential nutrients to prevent anemia and support brain and spine development in unborn babies.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vaccinations for Pregnant Woman</h3>
              <p className="text-gray-700 mb-4">Protects both mother and child from dangerous infections like tetanus, influenza, and whooping cough during pregnancy.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
          </div>

          {/* Enabling Frontier Technologies */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Enabling Frontier Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faUser} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Risk Prediction</h3>
              <p className="text-gray-700 mb-4">Uses maternal health data to identify pregnancy complications early and guide personalized clinical decisions.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faBook} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain for Health Records</h3>
              <p className="text-gray-700 mb-4">Ensures secure, transparent, and tamper-proof maternal health records across healthcare providers and systems.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faMobileAlt} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telemedicine & Mobile Health Apps</h3>
              <p className="text-gray-700 mb-4">Enables remote consultations, symptom tracking, and expert support through accessible mobile and online platforms.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faHeartbeat} className="text-blue-700 text-3xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wearable Monitoring Devices</h3>
              <p className="text-gray-700 mb-4">Continuously tracks heart rate, blood pressure, and fetal activity to detect early signs of distress.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </div>
          </div>

          {/* Featured Resources */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faHeartbeat} className="text-blue-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Safe Prenatal Exercises</h3>
              <p className="text-gray-700">Approved workout routines for pregnancy.</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faAppleAlt} className="text-blue-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Essential Nutrition Guide</h3>
              <p className="text-gray-700">Vital nutrition tips for pregnancy.</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <FontAwesomeIcon icon={faBook} className="text-blue-900 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Prenatal Check-ups</h3>
              <p className="text-gray-700">Guide to prenatal appointments.</p>
              <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
            </div>
          </div> */}

          
        </div>

      </div>
      {/* Call to Action */}
      <div className="bg-blue-900 text-white p-10  text-center mb-0">
            <h2 className="text-2xl font-bold mb-4">Start Your Health Journey Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Personalized Experience</h3>
                <p className="text-gray-200">Tailored health recommendations.</p>
              </div>
              <div className="bg-blue-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Expert Support</h3>
                <p className="text-gray-200">Connect with healthcare professionals.</p>
              </div>
              <div className="bg-blue-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Support Community</h3>
                <p className="text-gray-200">Join others on your journey.</p>
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
      <Footer />
    </>
  );
};

export default Ls4;