import React from 'react';
import { learningPoints } from '../data';
import { LightBulbIcon } from '@heroicons/react/24/outline';

const LearningSection: React.FC = () => {
  return (
    <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                <LightBulbIcon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What to learn</h2>
        </div>
        
        <p className="text-lg text-slate-600 mb-10">
          In this reflection activity, start thinking about how to evaluate the relevance of claims made about AI—from casual claims in conversation to media reports and systematic reviews. Ask these questions:
        </p>

        <div className="space-y-6">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
               <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                 {index + 1}
               </div>
               <div>
                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.question}</h3>
                 <p className="text-slate-600">{point.description}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;