import React, { useEffect, useState } from 'react';
import './creation.css';
import '../index.css';
import trash from './delete.png'
import Card from '../card/Card';

function CardsCreated(props){
    
    let cardslist = props.list.map((i, ind) => 
        <div className="cardPreview" key={i[0]}>
            <p>{i[0]}</p>
            <button onClick={() => props.deleteCard(ind)}><img src={trash}/></button>
        </div>)

    return(
    <div className="cardsContainer">
        {cardslist}
    </div>
    );
}

function SavingButtons(props){
    return(
        <div className="buttonsContainer">
            <button className="saveDeck">Save Deck</button>
            <button  onClick={() => {

                if(props.question.length == 0 || props.answer.length == 0) {alert("The values cannot be empty");}
                else{props.createCard([props.question, props.answer]);}

                }}>
            Save Card</button> 
        </div> 
    );
}

function DeckNameAndDescription(props){
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    
    let handleDeckName = event => setName(event.target.value);
    let handleDeckDescription = event => setDescription(event.target.value);

    return(
        <>
            <textarea className="question" placeholder="Deck name" value={name} onChange={handleDeckName}></textarea>
            <div className="divisionLine"></div>
            <textarea className="answer" placeholder="Deck description" value={description} onChange={handleDeckDescription}></textarea>

            <div className="buttonsContainer">
                <div></div>
                <button  onClick={() => {

                    if(name.length == 0 || description.length == 0) {alert("The values cannot be empty");}
                    else{props.setNandD([name, description])}

                    }}>Next</button> 
            </div> 
        </>
    );
}

function DeckCreation(){
    let [nameAndDescription, setNandD] = useState([]);
    let [question, questionValue] = useState('');
    let [answer, answerValue] = useState('');
    let [cardsArray, setNewCard] = useState([]);

    let handleInputQuestion = event => questionValue(event.target.value);
    let handleInputAnswer = event => answerValue(event.target.value);

    let mainComponent = nameAndDescription.length == 0?
    <DeckNameAndDescription setNandD={setNandD}/>:

    <>
        <textarea className="question" placeholder="Question" value={question} onChange={handleInputQuestion}></textarea>
        <div className="divisionLine"></div>
        <textarea className="answer" placeholder="Answer" value={answer} onChange={handleInputAnswer}></textarea>

        <SavingButtons question={question} answer={answer} createCard={createCard} />
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
        
    }

    return(
        <>
            <div className="mainContainer">{mainComponent}</div>
            <CardsCreated list={cardsArray} deleteCard={deleteCard}/>
        </>
    );
}

export default DeckCreation;