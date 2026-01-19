import React, { useState } from 'react';
import { ScenarioItem } from '../types';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  scenario: ScenarioItem;
}

const ScenarioQuiz: React.FC<Props> = ({ scenario }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const isCorrect = selectedOption === scenario.quiz.correctOptionIndex;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 scroll-mt-24" id={scenario.id}>
      <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{scenario.title}</h3>
        <div className="prose prose-slate max-w-none text-slate-600">
           <div className="whitespace-pre-line pl-4 border-l-4 border-indigo-200 italic">
            {scenario.content}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h4 className="text-lg font-semibold text-indigo-900 mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">?</span>
          {scenario.quiz.question}
        </h4>

        <div className="space-y-3 mb-6">
          {scenario.quiz.options.map((option, index) => (
            <button
              key={index}
              disabled={isSubmitted}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between group ${
                isSubmitted
                  ? index === scenario.quiz.correctOptionIndex
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : index === selectedOption
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-slate-100 bg-slate-50 text-slate-400 opacity-70'
                  : selectedOption === index
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-600'
                  : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span>{option}</span>
              {isSubmitted && index === scenario.quiz.correctOptionIndex && (
                <CheckCircleIcon className="w-6 h-6 text-green-500" />
              )}
              {isSubmitted && index === selectedOption && index !== scenario.quiz.correctOptionIndex && (
                <XCircleIcon className="w-6 h-6 text-red-500" />
              )}
            </button>
          ))}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className={`px-6 py-3 rounded-lg font-semibold shadow-sm transition-all ${
              selectedOption === null
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            Check Assessment
          </button>
        ) : (
          <div className={`mt-6 p-6 rounded-xl border animate-fadeIn ${
            isCorrect ? 'bg-green-50 border-green-200' : 'bg-indigo-50 border-indigo-200'
          }`}>
            <p className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-indigo-900'}`}>
              {isCorrect ? 'Correct Analysis!' : 'Expert Analysis:'}
            </p>
            <div className="prose prose-sm max-w-none text-slate-800 whitespace-pre-line leading-relaxed">
              {scenario.answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioQuiz;