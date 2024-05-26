import React from 'react';

interface FinalScreenProps {
    bananas: number;
    onRestart: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ bananas, onRestart }) => {
    return (
        <div className="final-screen">
            <h2>Congratulations!</h2>
            <p>You collected {bananas} bananas!</p>
            <button onClick={onRestart}>Play Again</button>
        </div>
    );
};

export default FinalScreen;
