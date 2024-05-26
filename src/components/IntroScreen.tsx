import React from 'react';

interface IntroScreenProps {
    onNext: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
    return (
        <div className="intro-screen">
            <h1>Welcome to the Matching Game!</h1>
            <button onClick={onNext}>Start</button>
        </div>
    );
};

export default IntroScreen;
