import React, { useState } from 'react';
import '../styles/deckComponent.css';
import Card from './Card'
import DeckDisplay from './DeckDisplay'

function DeckComponent(){
    let [chosenDeck, setDeck] = useState(null);
    let displayedComponent = chosenDeck === null? 
        <DeckDisplay changeDeck={setDeck}/>:
        <Card deck={chosenDeck} finished={() => setDeck(null)}/>;

    return (
        <>
        {displayedComponent}
        </>
    );
}

export default DeckComponent;