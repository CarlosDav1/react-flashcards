import React, { useState } from 'react';
import CardsCreated from '../deckCreation/CardsCreated'
import { Link } from 'react-router-dom'

function DeckEdit(props){

    let [deckEdit, setEdit] = useState(props.deckToEdit.cards);

    function deleteCard(cardIndex){
        let arrayCopy = deckEdit.map(i => i);
        arrayCopy.splice(cardIndex, 1);
        setEdit(arrayCopy);
    }

    function Save(){}

    function DiscardChanges(){}

    return (
        <>
            <CardsCreated list={deckEdit} deleteCard={deleteCard}/>

            <div>
                <button onClick={() => props.goBack(null)}><Link to="/">Discard Changes</Link></button>
                <button onClick={() => props.goBack(null)}><Link to="/">Save</Link></button>
            </div>
        </>
    );
}

export default DeckEdit;