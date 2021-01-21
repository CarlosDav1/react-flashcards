import React from 'react';
import './deckComponent.css';

function OneDeck(props){
    return(
        <div className="deckContainer" onClick={() => props.change(props.deck)}>
            <h1>{props.deck.Name}</h1>
            <p className="description">{props.deck.Description}</p>
            <p className="numberOfCards">{props.deck.cards.length.toString()}</p>
        </div>
    );
}

export default OneDeck;