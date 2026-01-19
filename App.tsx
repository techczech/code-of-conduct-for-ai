import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PrinciplesSection from './components/PrinciplesSection';
import EvidencePage from './components/EvidencePage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'code' | 'practice'>('code');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);

  const handleSetView = (view: 'code' | 'practice') => {
    setCurrentView(view);
    if (view === 'practice' || view === 'code') {
        // Reset scenario selection when switching main tabs
        setSelectedScenarioId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      <NavBar 
        currentView={currentView} 
        setView={handleSetView} 
        onResetSelection={() => setSelectedScenarioId(null)}
      />
      
      {currentView === 'code' ? (
        <div className="animate-fadeIn">
          <Hero 
            onStart={() => {
                const el = document.getElementById('code');
                el?.scrollIntoView({ behavior: 'smooth' });
            }} 
            onPractice={() => handleSetView('practice')} 
          />
          <PrinciplesSection />
        </div>
      ) : (
        <EvidencePage 
            selectedScenarioId={selectedScenarioId}
            onSelectScenario={setSelectedScenarioId}
        />
      )}
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;