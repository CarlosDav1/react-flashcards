import React, { useState } from 'react';
import SavingButtons from './SavingButtons'
import CardsCreated from './CardsCreated'
import DeckData from './DeckData'

function DeckCreation(){
    let [nameAndDescription, setNandD] = useState([]);
    let [question, questionValue] = useState('');
    let [answer, answerValue] = useState('');
    let [cardsArray, setNewCard] = useState([]);

    let handleInputQuestion = event => questionValue(event.target.value);
    let handleInputAnswer = event => answerValue(event.target.value);

    let mainComponent = nameAndDescription.length == 0?
    <DeckData setNandD={setNandD}/>:

    <>
        <textarea className="question" placeholder="Question" value={question} onChange={handleInputQuestion}></textarea>
        <div className="divisionLine"></div>
        <textarea className="answer" placeholder="Answer" value={answer} onChange={handleInputAnswer}></textarea>
        <SavingButtons question={question} answer={answer} createCard={createCard} saveDeck={saveDeck}/>
    </> 

    function createCard(props){
        cardsArray.unshift(props);
        setNewCard(cardsArray);
        questionValue('');
        answerValue('');
    }

    function deleteCard(cardIndex){
        let arrayCopy = cardsArray.map(i => i);
        arrayCopy.splice(cardIndex, 1);
        setNewCard(arrayCopy);
    }

    function saveDeck(){
        let savedDecks = localStorage.getItem("AllDecksTesting");

        let decksToObjects = JSON.parse(savedDecks);
        let newDeck = {Name: nameAndDescription[0], Description: nameAndDescription[1], cards: cardsArray};
        
        decksToObjects.decks.unshift(newDeck);
        let allDecks = JSON.stringify(decksToObjects);
        localStorage.setItem("AllDecksTesting", allDecks);
    }

    function EditCard(question, answer, index){
        let cardToEdit = [question, answer, index];
        questionValue(cardToEdit[0]);
        answerValue(cardToEdit[1]);
        deleteCard(cardToEdit[2]);
    }

    return(
        <>
            <div className="mainContainer">{mainComponent}<div className="insideDecoration"></div></div>
            <CardsCreated list={cardsArray} deleteCard={deleteCard} editCard={EditCard}/>
        </>
    );
}

export default DeckCreation;