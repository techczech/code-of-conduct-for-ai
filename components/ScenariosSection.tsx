import React, { useState } from 'react';
import { scenariosData } from '../data';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const ScenariosSection: React.FC = () => {
  const [openScenarioId, setOpenScenarioId] = useState<string | null>(null);

  const toggleScenario = (id: string) => {
    setOpenScenarioId(openScenarioId === id ? null : id);
  };

  return (
    <section id="practice" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">What to do: Practice Scenarios</h2>
        <p className="mt-4 text-xl text-gray-500">
          Review these scenarios and discuss the questions. The scenarios cover various types of claims about generative AI.
        </p>
      </div>

      <div className="space-y-6">
        {scenariosData.map((scenario) => (
          <div key={scenario.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{scenario.title}</h3>
              <div className="prose prose-slate max-w-none mb-6 text-slate-600">
                <div className="whitespace-pre-line pl-4 border-l-4 border-indigo-100 italic bg-slate-50 p-4 rounded-r-lg">
                  {scenario.content}
                </div>
              </div>
              
              <button 
                onClick={() => toggleScenario(scenario.id)}
                className="flex items-center justify-center w-full md:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors gap-2"
              >
                {openScenarioId === scenario.id ? (
                    <>
                        Hide Assessment <ChevronUpIcon className="w-4 h-4" />
                    </>
                ) : (
                    <>
                        Reveal Assessment <ChevronDownIcon className="w-4 h-4" />
                    </>
                )}
              </button>
            </div>

            {openScenarioId === scenario.id && (
              <div className="bg-indigo-50 p-6 md:p-8 border-t border-indigo-100 animate-fadeIn">
                <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-3">Suggested Answer</h4>
                <div className="prose prose-indigo max-w-none text-slate-800 whitespace-pre-line leading-relaxed">
                  {scenario.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScenariosSection;