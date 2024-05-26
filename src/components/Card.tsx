// src/components/Card.tsx
import React from 'react';

interface CardProps {
    id: number;
    image: string;
    flipped: boolean;
    onClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, image, flipped, onClick }) => {
    return (
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => onClick(id)}>
            {flipped ? <img src={image} alt="card" /> : <div className="card-back"></div>}
        </div>
    );
};

export default Card;
