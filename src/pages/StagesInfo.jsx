
import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Emblem from '../assets/Emblem_of_India.svg';
import l1 from  '../assets/l1.svg';
import { useParams,useLocation } from 'react-router-dom';

import { faUser, faShieldAlt, faMobileAlt, faHeartbeat, faBook, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { getStagesById } from '../services/content';
import Loader from '../svg/Loader';

const StagesInfo = () => {
  const params=useParams()
  
  const {id}=params
  const [stageDetails,setStageDetails]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    alert('Registration process started!');
  };

useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Government Banner */}
      <div className="bg-blue-900 text-white text-center py-2 flex justify-center items-center space-x-4">
        <img src={Emblem} alt="Ashoka Emblem" className="h-8" />
        <span className="font-semibold">Government of India | SwasthBharath</span>
      </div>

      <Navbar />
<div className='min-h-[31.25rem]'>

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

export default StagesInfo;