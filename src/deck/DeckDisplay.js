import React, { useState } from 'react';
import demo from './deckDemo.json';
import './deckComponent.css';
import OneDeck from './OneDeck'
import CreateDeck from './CreateDeck'

function DeckDisplay(props){
    if(localStorage.getItem("AllDecksTesting") == null){localStorage.setItem("AllDecksTesting", JSON.stringify({decks: []}))}
    
    let decksObject = JSON.parse(localStorage.getItem("AllDecksTesting"));
    let [decksToObjects, setDecks] = useState(decksObject.decks);
    let creatingComponents = decksToObjects.length == 0? null
    :decksToObjects.map((prop, ind) => <OneDeck key={prop.Name} deck={prop} change={props.changeDeck} delete={deleteDeck} ind={ind} setIndex={props.setIndex}/>)    

    function deleteDeck(index){
        let copyArray = decksToObjects.map(i => i);
        copyArray.splice(index, 1);
        setDecks(copyArray);

        decksObject.decks = copyArray;

        let jsonString = JSON.stringify(decksObject);
        localStorage.setItem("AllDecksTesting", jsonString);
    }

    return (
        <div className="allDecks">
            <OneDeck deck={demo} change={props.changeDeck}/>
            {creatingComponents}
            <CreateDeck />
        </div>
    );
}

export default DeckDisplay;