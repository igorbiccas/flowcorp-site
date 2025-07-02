
import React from 'react';
import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import PossibilitiesSection from './components/PossibilitiesSection';
import BetaSection from './components/BetaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow">
        <Header />
        <ProblemSection />
        <SolutionSection />
        <PossibilitiesSection />
        <BetaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;