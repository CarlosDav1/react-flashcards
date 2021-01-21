import React from 'react';
import './deckComponent.css';
import { Link } from 'react-router-dom';
import plus from './plus.png'

function CreateDeck(){
    return(
        <Link to="/create">
            <div className="newDeck deckContainer">
                <div className="newDeckContents">
                    <img className="plus" src={plus}></img>
                    <p>Create New Deck</p>
                </div>
            </div>
        </Link>
    );
}

export default CreateDeck;