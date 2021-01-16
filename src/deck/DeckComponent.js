import React, { useEffect, useState } from 'react';
import './deckComponent.css'

function OneDeck(){
    return(
        <div className="deckContainer">
            <h1>Deck name</h1>
            <p className="description">This is the description of the deck</p>
            <p className="numberOfCards">50</p>
        </div>
    );
}

function DeckComponent(){
    return (
        <div className="allDecks">
            <OneDeck />
            <OneDeck />
            <OneDeck />
            <OneDeck />
            <OneDeck />
            <OneDeck />
        </div>
    );
}

export default DeckComponent;