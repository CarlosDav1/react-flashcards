import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../icons/plus.png'

function CreateDeck(){
    return(
            <div className="newDeck deckContainer">
                <Link to="/create">
                    <div className="insideDecoration">
                        <div className="newDeckContents">
                            <img className="plus"src={plus}></img>
                            <p>Create New Deck</p>
                        </div>
                    </div>
                </Link>
            </div>
    );
}

export default CreateDeck;