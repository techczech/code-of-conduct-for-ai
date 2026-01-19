import React, { useState } from 'react';
import LearningSection from './LearningSection';
import ScenarioDetail from './ScenarioDetail';
import { scenariosData } from '../data';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  selectedScenarioId: string | null;
  onSelectScenario: (id: string | null) => void;
}

const EvidencePage: React.FC<Props> = ({ selectedScenarioId, onSelectScenario }) => {
  const selectedScenario = scenariosData.find(s => s.id === selectedScenarioId);

  // If a scenario is selected, show the detail view
  if (selectedScenario) {
    return (
      <ScenarioDetail 
        scenario={selectedScenario} 
        onBack={() => onSelectScenario(null)} 
      />
    );
  }

  // Otherwise show the Dashboard / Index
  return (
    <div className="animate-fadeIn min-h-screen">
      {/* Header */}
      <div className="bg-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Evaluating Evidence
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed">
            Practice applying the code of conduct by evaluating real-world claims about AI.
            Select a scenario below to test your ability to spot misleading information, outdated studies, and context errors.
          </p>
        </div>
      </div>

      <LearningSection />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-4">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Practice Scenarios</h2>
                <p className="mt-2 text-slate-500">Choose a case study to analyze.</p>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenariosData.map((scenario) => (
            <div 
                key={scenario.id} 
                onClick={() => onSelectScenario(scenario.id)}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-indigo-300 transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                     <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">
                        Case Study
                     </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {scenario.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {scenario.summary}
                </p>
                
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Start Evaluation <ChevronRightIcon className="w-5 h-5 ml-1" />
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-100">
                <div className="h-full bg-indigo-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EvidencePage;