import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import InstructionScreen from './components/InstructionScreen';
import ActivityScreen from './components/ActivityScreen';
import FinalScreen from './components/FinalScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
    const [screen, setScreen] = useState<string>('intro');
    const [bananas, setBananas] = useState<number>(0);

    const handleNext = (nextScreen: string) => {
        setScreen(nextScreen);
    };

    const handleRestart = () => {
        setScreen('intro');
        setBananas(0);
    };

    return (
        <div className="app">
            <Header />
            {screen === 'intro' && <IntroScreen onNext={() => handleNext('instructions')} />}
            {screen === 'instructions' && <InstructionScreen onNext={() => handleNext('activity')} />}
            {screen === 'activity' && <ActivityScreen />}
            {screen === 'final' && <FinalScreen bananas={bananas} onRestart={handleRestart} />}
            <Footer />
        </div>
    );
};

export default App;
