
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

const StageDetails = () => {
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
const fetchStageDetails=async()=>{
    setIsLoading(true)
  try{
  const data=  await getStagesById(id)
  setStageDetails(data?.data)
  }catch(err){
    console.log(err)
  }
  setIsLoading(false)
}
useEffect(()=>{
    fetchStageDetails()
}
,[])
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

      <div className="min-h-screen bg-gray-50 font-work-sans">
        <div className="container mx-auto py-8 px-4">
          {/* Header Section */}
          <div className="text-center mb-10 relative ">
            {/* <img src="/path-to-ministry-logo.png" alt="Ministry Logo" className="h-16 mx-auto mb-4" /> */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{stageDetails?.Title}</h1>
            <p className="text-gray-600 mt-2">{stageDetails?.description}</p>
          { stageDetails?.icon1&& <div
                      className={`svg-container w-auto h-[8rem] mb-2 text-blue-700 absolute -top-6 right-0 `}

                      dangerouslySetInnerHTML={{ __html: stageDetails.icon1 }}
                    />}
            {/* <img src={l1} alt="Decorative" className="absolute -top-6 right-0 h-24 w-auto md:h-32 md:w-auto" style={{zIndex: 1}} /> */}
          </div>
{!isLoading?<>
          {/* Envisioned Health Ecosystem */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Envisioned Health Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
           {stageDetails?.health_ecosystem_items?.map(val=> <a href={`/stageDetails/${id}/health_ecosystem/${val.documentId}`} key={val.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div
                      className={`svg-container w-[1.5rem] h-[1.5rem] mb-2 text-blue-700`}

                      dangerouslySetInnerHTML={{ __html: val.icon }}
                    />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[50px]">{val?.Title}</h3>
              {val?.description&& <p className="text-gray-700 mb-4 min-h-[120px] ">{val.description}</p>}
              <a href={`/stageDetails/${id}/health_ecosystem/${val.documentId}`} className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </a>)}
           
          </div>

          {/* Enabling Frontier Technologies */}
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Enabling Frontier Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stageDetails?.frontier_technologies?.map(val=><a href={`/stageDetails/${id}/frontier_technologies/${val.documentId}`}
          key={val.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
            <div
                      className={`svg-container w-[1.5rem] h-[1.5rem] mb-2 text-blue-700`}

                      dangerouslySetInnerHTML={{ __html: val.icon }}
                    />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[50px]">{val?.Title}</h3>
          {val?.description&&<p className="text-gray-700 mb-4 min-h-[120px] ">{val.description}</p>}
              <a href={`/stageDetails/${id}/frontier_technologies/${val.documentId}`} className="text-blue-600 hover:underline font-medium flex items-center gap-1">Learn More <span>&rarr;</span></a>
            </a>)}
           
          </div>
</>:<div className='flex spin-pause h-[500px] flex items-center justify-center'><Loader/></div>}
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

export default StageDetails;