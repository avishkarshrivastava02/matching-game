import React from 'react';

interface InstructionScreenProps {
    onNext: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onNext }) => {
    return (
        <div className="instruction-screen">
            <h2>Game Instructions</h2>
            <p>Match the cards to collect bananas. You have a limited number of tries.</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default InstructionScreen;
