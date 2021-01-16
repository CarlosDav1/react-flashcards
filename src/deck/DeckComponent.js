import React, { useEffect, useState } from 'react';
import demo from './deckDemo.json';
import './deckComponent.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Card from '../card/Card'

function DeckComponent(){
    let [chosenDeck, setDeck] = useState(null);
    let displayedComponent = chosenDeck === null? <DeckDisplay/> : <Card deck={chosenDeck} finished={setDeckNull}/>;

    function changeDeck(props){
        setDeck(props);
        console.log(props);
    }

    function setDeckNull(){
        console.log('working');
        setDeck(null);
    }

    function DeckDisplay(){
        function OneDeck(props){
            return(
                <div className="deckContainer" onClick={() => changeDeck(props.deck)}>
                    <h1>{props.deck.Name}</h1>
                    <p className="description">{props.deck.Description}Place</p>
                    <p className="numberOfCards">{props.deck.questions.length.toString()}2</p>
                </div>
            );
        }
    
        return (
            <div className="allDecks">
                <OneDeck deck={demo}/>
            </div>
        );
    }

    return (
        <>
        {/*<Router>
            <Route path="/" exact component={DeckDisplay} />
        </ Router>*/}
        
        {displayedComponent}
        </>
    );
}

export default DeckComponent;