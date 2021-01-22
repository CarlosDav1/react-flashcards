import React from 'react';
import trash from '../deckCreation/delete.png';
import edit from './edit.png';
import './deckComponent.css';

function OneDeck(props){
    return(
        <div className="deckContainer">
            <div className="clickArea"  onClick={() => props.change(props.deck)}></div>
            <h1>{props.deck.Name}</h1>
            <p className="description">{props.deck.Description}</p>
            <p className="numberOfCards">{props.deck.cards.length.toString()}</p>
            <div className="buttons">
                <button className="edit" onClick={() => console.log("hi")}><img src={edit}/></button>
                <button className="delete" onClick={() => props.delete(props.ind)}><img src={trash}/></button>
            </div>
        </div>
    );
}

export default OneDeck;