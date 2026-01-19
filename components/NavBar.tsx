import React from 'react';

interface NavBarProps {
  currentView: 'code' | 'practice';
  setView: (view: 'code' | 'practice') => void;
  onResetSelection: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentView, setView, onResetSelection }) => {
  const handleNavClick = (view: 'code' | 'practice') => {
    setView(view);
    if (view === 'practice') {
      onResetSelection();
    }
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-bold text-indigo-900 tracking-tight cursor-pointer" 
              onClick={() => handleNavClick('code')}
            >
              AI Literacy <span className="text-indigo-500 font-light">Practitioner</span>
            </span>
          </div>
          <div className="flex space-x-8 items-center">
            <button
              onClick={() => handleNavClick('code')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full transition-colors ${
                currentView === 'code'
                  ? 'border-indigo-500 text-indigo-900'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              The Code
            </button>
            <button
              onClick={() => handleNavClick('practice')}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full transition-colors ${
                currentView === 'practice'
                  ? 'border-indigo-500 text-indigo-900'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Evaluating Evidence
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;