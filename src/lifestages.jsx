
import React from 'react';
import Stage1 from './svg/Stage1';
import Stage2 from './svg/Stage2';
import Stage3 from './svg/Stage3';
import Stage4 from './svg/Stage4';
import Stage5 from './svg/Stage5';
import Stage6 from './svg/Stage6';
import Stage7 from './svg/Stage7';

const stages = [
  {
    id: 'prenatal',
    title: 'Prenatal & Maternal Care',
    ecosystem: [
      'Folic acid & iron supplementation',
      'Vaccinations for pregnant women',
      'Antenatal care',
    ],
    technology: [
      'AI-powered risk prediction',
      'Wearable monitoring devices',
      'Telemedicine & mobile health apps',
      'Blockchain for health records',
    ],
  },
  {
    id: 'infant',
    title: 'Neonatal & Infant Care',
    ecosystem: [
      'Nutrition support',
      'Immunization',
      'Newborn screening',
      'Birth registration & vital statistics',
    ],
    technology: [
      'Smart incubators',
      'Genomic screening & personalized medicine',
      'IoT-enabled vaccination tracking',
      '3D printing of medical devices',
    ],
  },
  {
    id: 'childhood',
    title: 'Early Childhood',
    ecosystem: [
      'Growth monitoring & early developmental screening',
      'Early childhood education & stimulation',
      'Malnutrition prevention & treatment',
      'Routine immunization',
    ],
    technology: [
      'AI-driven malnutrition detection',
      'Digital health records',
      'Virtual reality (VR) for early learning',
      'Point-of-care diagnostics',
    ],
  },
  {
    id: 'school',
    title: 'School Age & Adolescence',
    ecosystem: [
      'Substance abuse prevention',
      'Adolescent reproductive health',
      'Mental health support',
      'Menstrual health & hygiene',
      'School health programs',
    ],
    technology: [
      'AI-driven mental health chatbots',
      'Wearable biosensors',
      'Blockchain-based health passports',
      'HPV self-sampling kits',
      'Smart toothbrushes & oral health AI',
    ],
  },
  {
    id: 'adulthood',
    title: 'Adulthood',
    ecosystem: [
      'Vaccinations (Influenza, hepatitis B, COVID-19 boosters)',
      'Preventive screenings',
      'Mental health services',
      'Occupational health & safety',
      'Lifestyle disease prevention',
      'Infectious disease control',
      'Maternal health services',
      'Reproductive & sexual health services',
    ],
    technology: [
      'AI-driven chronic disease management',
      'Telemedicine & remote patient monitoring',
      'CRISPR & gene therapy',
      'Digital twins for personalized treatment',
      'Smart drug dispensers & biosensors',
    ],
  },
  {
    id: 'elderly',
    title: 'Elderly Care',
    ecosystem: [
      'Social support programs',
      'Palliative care & pain management',
      'Cancer screenings',
      'Non-communicable disease',
      'Geriatric healthcare services',
    ],
    technology: [
      'AI-powered fall detection systems',
      'Brain-computer interfaces (BCIs)',
      'Personalized AI caregivers',
      'Smart prosthetics & exoskeletons',
      'Wearable ECG & blood pressure monitors',
    ],
  },
  {
    id: 'endoflife',
    title: 'End of the Life & Death Services',
    ecosystem: [
      'Public health funeral services',
      'Death registration & vital statistics',
      'Bereavement & grief counseling',
      'Palliative & hospice cares',
    ],
    technology: [
      'AI-powered palliative care decision support',
      'VR therapy for pain and anxiety',
      'Blockchain for digital wills & medical directives',
      'Biodegradable nanotech burial solutions',
    ],
  },
];

function HealthEcosystemTimeline() {
  const stageIcons = [Stage1, Stage2, Stage3, Stage4, Stage5, Stage6, Stage7];

  return (
    <div className="w-full min-h-screen bg-[#2e1662] font-work-sans px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
     
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {stages.map((stage, index) => (
          <div key={stage.id} className="bg-white p-4 sm:p-6 border rounded-xl shadow-sm">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <span className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full ${stage.id === 'prenatal' ? 'bg-[#d3c9b7]' : 'bg-[#d3c9b7]'}`}>
                {React.createElement(stageIcons[index], {
                  width: '24',
                  height: '24',
                  style: { fill: 'currentColor' },
                  className: 'text-gray-800',
                })}
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0b1623]">{stage.title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-[#50b36b] font-semibold text-sm sm:text-base lg:text-lg mb-2">Health Ecosystem</h3>
                <div className="flex flex-wrap gap-2">
                  {stage.ecosystem.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-green-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[#2a86d1] font-semibold text-sm sm:text-base lg:text-lg mb-2">Frontier Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {stage.technology.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-[#2a86d1] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthEcosystemTimeline;
