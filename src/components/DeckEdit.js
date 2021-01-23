import React, { useEffect, useState } from 'react';
import CardsCreated from './CardsCreated'
import { Link } from 'react-router-dom'

function CardForm(props){
    let [question, questionValue] = useState('');
    let [answer, answerValue] = useState('');
    let handleInputQuestion = event => questionValue(event.target.value);
    let handleInputAnswer = event => answerValue(event.target.value);

    useEffect(() => {
            questionValue(props.actualCard[0]);
            answerValue(props.actualCard[1]);
    }, props.actualCard);

    return(
        <div className="mainContainer">
            <textarea className="question" placeholder="Question" value={question} onChange={handleInputQuestion}></textarea>
            <div className="divisionLine"></div>
            <textarea className="answer" placeholder="Answer" value={answer} onChange={handleInputAnswer}></textarea>
            <button onClick={() => { 
            
            if(question.length == 0 || answer.length == 0) {alert("The values cannot be empty");}
            else{
                props.create([question, answer])
                questionValue('');
                answerValue('');
            }

            }}>Add Card</button>
        </div>
    );
}

function DeckEdit(props){
    let [deckEdit, setEdit] = useState(props.deckToEdit.cards);
    let [cardToEdit, setCardToEdit] = useState(['', '', 0]);

    function deleteCard(cardIndex){
        let arrayCopy = deckEdit.map(i => i);
        arrayCopy.splice(cardIndex, 1);
        setEdit(arrayCopy);
    }

    function saveDeck(index){
        let savedDecks = localStorage.getItem("AllDecksTesting");
        let decksToObjects = JSON.parse(savedDecks);
        decksToObjects.decks[index].cards = deckEdit;
        let allDecks = JSON.stringify(decksToObjects);
        localStorage.setItem("AllDecksTesting", allDecks);
    }

    function createCard(props){
        setCardToEdit(['', '', 0]);
        let arrayCopy = deckEdit.map(i => i);
        arrayCopy.unshift(props);
        setEdit(arrayCopy);
    }

    function EditCard(question, answer, index){
        cardToEdit = [question, answer, index];
        setCardToEdit(cardToEdit);
        deleteCard(index);
    }

    return (
        <>  
            <CardForm create={createCard} actualCard={cardToEdit}/>
            <CardsCreated list={deckEdit} deleteCard={deleteCard} editCard={EditCard}/>

            <div>
                <Link to="/"><button onClick={() => props.goBack(null)}>Discard Changes</button></Link>
                <Link to="/" onClick={() => {saveDeck(props.index); props.goBack(null);}}><button>Save</button></Link>
            </div>
        </>
    );
}

export default DeckEdit;