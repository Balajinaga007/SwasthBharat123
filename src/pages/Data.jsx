import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import GovBanner from '../components/GovBanner';

const Data = () => {
  return (
    <>
      {/* Government Banner */}
      <GovBanner />

      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-ta-dark-brown mb-4">
              Data Repository
            </h1>
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚧 Work in Progress (WIP)
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-ta-dark-brown mb-6">
                What This Page Captures
              </h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  This comprehensive data repository will aggregate and present research findings from various 
                  private and public sources focused on <strong>lifespan</strong>, <strong>healthspan</strong>, 
                  and <strong>quality of health</strong> specifically for India.
                </p>
                
                <p>
                  Our data collection will include:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Longitudinal studies on Indian population health metrics</li>
                  <li>Research from leading medical institutions and universities</li>
                  <li>Government health surveys and demographic data</li>
                  <li>Private sector health analytics and insights</li>
                  <li>Regional variations in health outcomes across Indian states</li>
                  <li>Age-specific health trends and patterns</li>
                  <li>Comparative analysis with global health standards</li>
                </ul>
                
                <p>
                  The goal is to provide evidence-based insights that can inform policy decisions, 
                  healthcare interventions, and individual health choices to improve both the 
                  quantity and quality of life for Indian citizens.
                </p>
              </div>
            </div>
          </div>

          {/* Features Coming Soon */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-ta-dark-brown mb-4">
                📊 Interactive Visualizations
              </h3>
              <p className="text-gray-700">
                Dynamic charts and graphs showing health trends, regional comparisons, 
                and demographic breakdowns of lifespan and healthspan data.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-ta-dark-brown mb-4">
                🔍 Research Database
              </h3>
              <p className="text-gray-700">
                Searchable repository of peer-reviewed studies, government reports, 
                and research papers related to Indian health outcomes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-ta-dark-brown mb-4">
                📈 Health Metrics Dashboard
              </h3>
              <p className="text-gray-700">
                Real-time tracking of key health indicators across different 
                life stages and geographical regions in India.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-ta-dark-brown mb-4">
                🎯 Targeted Insights
              </h3>
              <p className="text-gray-700">
                Age-specific, gender-specific, and region-specific health data 
                to support targeted healthcare interventions.
              </p>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Data; 