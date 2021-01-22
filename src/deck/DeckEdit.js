import React, { useState } from 'react';
import CardsCreated from '../deckCreation/CardsCreated'

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
                <button>Discard Changes</button>
                <button>Save</button>
            </div>
        </>
    );
}

export default DeckEdit;