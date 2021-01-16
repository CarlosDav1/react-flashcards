import React, { useEffect, useState } from 'react';
import './card.css'
import deckDemo from '../deck/deckDemo.json' 

function Answer(props){
    return(
        <>
            <div className="divisionLine"></div>
            <p className="answerStyle">{props.ans}</p>
        </>
    );
}

function ButtonDiv(props){
    return(
        <>
            <div className="buttonContainer">
                <button onClick={props.nqFunc}>X</button>
                <button onClick={props.nqFunc}>O</button>
            </div>
        </>
    );
}

function MainComp(props){
    return(
        <>
            <div className="cardContainer" onClick={props.reveal}>
            <h1 className="questionStyle">{props.question}</h1>
                {props.answer}
            </div>

            {props.buttons}
        </>
    );
}

function GoBack(){
    return(
        <>
            <h1>Congratulations! You Finished the deck</h1>
            <p>do you want to retry or do wanna go back?</p>
            <button>Retry</button>
            <button>Go Back</button>
        </>
    );
}

function Card(){
    let [isRevealed, revealAnswer] = useState(false);
    let [currentQuestion, setQuestion] = useState('');
    let [currentAnswer, setAnswer] = useState('');
    let [count, setCount] = useState(0);
    
    let answer = isRevealed? <Answer ans={currentAnswer}/>: null;
    let buttonContainer = isRevealed? <ButtonDiv nqFunc={() => NextQuestion(false)}/> : null;

    useEffect(() => {NextQuestion(true);}, [])

    function NextQuestion(isFirst){
        setQuestion(currentQuestion = deckDemo["questions"][count]);
        setAnswer(currentAnswer = deckDemo["answers"][count]);
        setCount(prevState => prevState + 1);
        
        if(!isFirst){revealAnswer(prevState => prevState = !prevState)}
    }

    return count == deckDemo["questions"].length + 1?
        <GoBack />
        :<MainComp reveal={() => revealAnswer(true)} question={currentQuestion} answer={answer} buttons={buttonContainer}/>; 
}

export default Card;