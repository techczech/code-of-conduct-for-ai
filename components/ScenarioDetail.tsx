import React, { useState } from 'react';
import { ScenarioItem } from '../types';
import { 
  ArrowLeftIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  LightBulbIcon,
  ChevronDownIcon,
  ChevronUpIcon 
} from '@heroicons/react/24/outline';

interface Props {
  scenario: ScenarioItem;
  onBack: () => void;
}

const ScenarioDetail: React.FC<Props> = ({ scenario, onBack }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
      setIsExpanded(true); // Automatically expand the deep dive on submission
    }
  };

  const isCorrect = selectedOption === scenario.quiz.correctOptionIndex;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn">
      {/* Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors group"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Scenarios
      </button>

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">{scenario.title}</h2>
        <p className="text-xl text-slate-500 leading-relaxed">{scenario.summary}</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Column: The Case Study */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Scenario Context
                </h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <div className="whitespace-pre-line pl-4 border-l-4 border-indigo-200 italic bg-slate-50/50 p-4 rounded-r-lg">
                    {scenario.content}
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dive / Answer Section - Expandable */}
          <div className={`transition-all duration-500 ease-in-out ${isSubmitted ? 'opacity-100 translate-y-0' : 'opacity-50 grayscale blur-[1px]'}`}>
             <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden relative">
                {!isSubmitted && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
                        <span className="bg-white px-4 py-2 rounded-full shadow-md text-slate-500 text-sm font-medium border border-slate-200">
                            Complete assessment to unlock analysis
                        </span>
                    </div>
                )}
                
                <div 
                    className="px-6 py-4 bg-indigo-900 text-white flex justify-between items-center cursor-pointer select-none"
                    onClick={() => isSubmitted && setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center gap-3">
                        <LightBulbIcon className="w-6 h-6 text-yellow-300" />
                        <h3 className="font-bold text-lg">Expert Analysis</h3>
                    </div>
                    {isSubmitted && (
                        isExpanded ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />
                    )}
                </div>

                {(isExpanded || !isSubmitted) && (
                    <div className="p-6 md:p-8 bg-indigo-50/50">
                        <div className="prose prose-indigo max-w-none text-slate-800 whitespace-pre-line leading-relaxed">
                            {scenario.answer}
                        </div>
                    </div>
                )}
             </div>
          </div>
        </div>

        {/* Right Column: The Quiz */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 sticky top-24">
            <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-xl text-gray-900">Your Assessment</h3>
                <p className="text-sm text-slate-500 mt-2">Evaluate the claim based on the Code of Conduct.</p>
            </div>
            
            <div className="p-6">
                <p className="font-medium text-indigo-900 mb-6">{scenario.quiz.question}</p>

                <div className="space-y-3 mb-6">
                    {scenario.quiz.options.map((option, index) => (
                    <button
                        key={index}
                        disabled={isSubmitted}
                        onClick={() => setSelectedOption(index)}
                        className={`w-full text-left p-3.5 rounded-lg border transition-all duration-200 flex items-start justify-between group text-sm ${
                        isSubmitted
                            ? index === scenario.quiz.correctOptionIndex
                            ? 'border-green-500 bg-green-50 text-green-900'
                            : index === selectedOption
                            ? 'border-red-500 bg-red-50 text-red-900'
                            : 'border-slate-100 bg-slate-50 text-slate-400 opacity-60'
                            : selectedOption === index
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-1 ring-indigo-600 shadow-sm'
                            : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'
                        }`}
                    >
                        <span>{option}</span>
                        {isSubmitted && index === scenario.quiz.correctOptionIndex && (
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
                        )}
                        {isSubmitted && index === selectedOption && index !== scenario.quiz.correctOptionIndex && (
                        <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />
                        )}
                    </button>
                    ))}
                </div>

                {!isSubmitted ? (
                    <button
                        onClick={handleSubmit}
                        disabled={selectedOption === null}
                        className={`w-full py-3 rounded-lg font-bold shadow-sm transition-all transform active:scale-95 ${
                        selectedOption === null
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 hover:shadow-lg'
                        }`}
                    >
                        Check Answer
                    </button>
                ) : (
                    <div className={`p-4 rounded-lg border text-center animate-fadeIn ${
                        isCorrect ? 'bg-green-100 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
                    }`}>
                        <p className="font-bold">
                            {isCorrect ? 'Correct Assessment' : 'Incorrect Assessment'}
                        </p>
                        <p className="text-sm mt-1">
                            {isCorrect ? 'Great job! See the analysis for details.' : 'Review the expert analysis on the left.'}
                        </p>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioDetail;