import React from 'react';
import { principlesData } from '../data';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PrinciplesSection: React.FC = () => {
  return (
    <section id="code" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">The Standard</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Professional Integrity in AI Communication
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Guidelines to ensure accuracy, honesty, and healthy debate when discussing Artificial Intelligence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {principlesData.map((principle, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
            </div>
            <ul className="space-y-4 flex-1">
              {principle.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;