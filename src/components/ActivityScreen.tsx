import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CardData } from '../types'; // Adjust the path to the correct location of types.ts

const ActivityScreen: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matches, setMatches] = useState<number>(0);
    const [tries, setTries] = useState<number>(0);
    const [bananas, setBananas] = useState<number>(0);

    useEffect(() => {
        // Load card data from JSON file
        fetch('/data/cards.json')
            .then(response => response.json())
            .then(data => setCards(data));
    }, []);

    const handleCardClick = (id: number) => {
        if (flippedCards.length === 1) {
            setFlippedCards([...flippedCards, id]);
            setTries(tries + 1);
            checkForMatch(id);
        } else {
            setFlippedCards([id]);
        }
    };

    const checkForMatch = (id: number) => {
        const firstCard = cards.find(card => card.id === flippedCards[0]);
        const secondCard = cards.find(card => card.id === id);
        if (firstCard && secondCard && firstCard.image === secondCard.image) {
            setMatches(matches + 1);
            setBananas(bananas + 1);
            setCards(cards.map(card =>
                card.id === firstCard.id || card.id === secondCard.id ? { ...card, matched: true } : card
            ));
        }
        setTimeout(() => setFlippedCards([]), 1000);
    };

    return (
        <div className="activity-screen">
            <div className="grid">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        flipped={flippedCards.includes(card.id) || card.matched}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <p>Matches: {matches} Bananas: {bananas} Tries: {tries}</p>
        </div>
    );
};

export default ActivityScreen;
