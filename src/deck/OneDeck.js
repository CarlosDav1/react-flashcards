import React from 'react';
import trash from '../deckCreation/delete.png';
import edit from './edit.png';
import './deckComponent.css';
import { Link } from 'react-router-dom';

function OneDeck(props){

    return(
        <div className="deckContainer">
            <Link to="/card">
            <div className="clickArea" onClick={() => props.change(props.deck)}></div>
            </Link>
            <h1>{props.deck.Name}</h1>
            <p className="description">{props.deck.Description}</p>
            <p className="numberOfCards">{props.deck.cards.length.toString()}</p>
            <div className="buttons">
                <button className="edit" onClick={() => {props.change(props.deck); props.setIndex(props.ind)}}>
                    <Link to="/edit">
                        <img src={edit}/>
                    </Link>
                </button>
                <button className="delete" onClick={() => props.delete(props.ind)}><img src={trash}/></button>

            </div>
        </div>
    );
}

export default OneDeck;