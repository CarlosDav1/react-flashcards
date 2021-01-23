import React from 'react';
import trash from '../icons/delete.png';
import edit from '../icons/edit.png';
import '../styles/deckComponent.css';
import { Link } from 'react-router-dom';

function OneDeck(props){
    let isEmpty = props.deck.cards.length == 0? "/" : "/card";

    return(
        <div className="deckContainer">

            <Link to={isEmpty}>
                <div className="clickArea" onClick={() => {
                        
                        if(props.deck.cards.length == 0){alert("This deck is empty")}
                        else{
                            props.change(props.deck);
                        }

                    }}>
                </div>
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