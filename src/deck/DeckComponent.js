import React, { useState } from 'react';
import demo from './deckDemo.json';
import './deckComponent.css';
import Card from '../card/Card'
import OneDeck from './OneDeck'
import CreateDeck from './CreateDeck'

function DeckDisplay(props){
    if(localStorage.getItem("AllDecksTesting") == null){localStorage.setItem("AllDecksTesting", JSON.stringify({decks: []}))}
    
    let savedDecks = localStorage.getItem("AllDecksTesting");
    let decksObject = JSON.parse(savedDecks);
    let [decksToObjects, setDecks] = useState(decksObject.decks);
    let change = props.changeDeck;
    let creatingComponents = decksToObjects.length == 0? null
    :decksToObjects.map((prop, ind) => <OneDeck key={prop.Name} deck={prop} change={change} delete={deleteDeck} ind={ind}/>)    

    function deleteDeck(index){
        let copyArray = decksToObjects.map(i => i);
        copyArray.splice(index, 1);
        setDecks(copyArray);
        console.log(copyArray);

        decksObject.decks = copyArray;
        console.log(decksObject);

        let jsonString = JSON.stringify(decksObject);
        localStorage.setItem("AllDecksTesting", jsonString);

        console.log(localStorage.getItem("AllDecksTesting"))
    }

    function editDeck(){}

    return (
        <div className="allDecks">
            <OneDeck deck={demo} change={change}/>
            {creatingComponents}
            <CreateDeck />
        </div>
    );
}

function DeckComponent(){
    let [chosenDeck, setDeck] = useState(null);
    let displayedComponent = chosenDeck === null? 
        <DeckDisplay changeDeck={setDeck}/>:
        <Card deck={chosenDeck} finished={() => setDeck(null)}/>;

    return (
        <>
        {displayedComponent}
        </>
    );
}

export default DeckComponent;