import React, { useEffect, useState } from 'react';
import './card.css'
import { Link } from 'react-router-dom'

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

function GoBack(props){
    return(
        <>
            <h1>Congratulations! You Finished the deck.</h1>
            <p>Let's go back.</p>
            <button onClick={props.finish}>Go Back.</button>
        </>
    );
}

function Card(props){
    let [isRevealed, revealAnswer] = useState(false);
    let [currentQuestion, setQuestion] = useState('');
    let [currentAnswer, setAnswer] = useState('');
    let [count, setCount] = useState(0);
    
    let answer = isRevealed? <Answer ans={currentAnswer}/>: null;
    let buttonContainer = isRevealed? <ButtonDiv nqFunc={() => NextQuestion(false)}/> : null;

    useEffect(() => {NextQuestion(true);}, [])
    
    function retryfunc(){
        setCount(0);
        setQuestion(currentQuestion = props.deck.questions[count]);
        console.log(props.deck.questions[count] + " :" + count)
        setAnswer(currentAnswer = props.deck.answers[count]);
    }

    function NextQuestion(isFirst){
        setQuestion(currentQuestion = props.deck.questions[count]);
        console.log(props.deck.questions[count] + " :" + count)
        setAnswer(currentAnswer = props.deck.answers[count]);
        setCount(prevState => prevState + 1);
        
        if(!isFirst){revealAnswer(prevState => prevState = !prevState)}
    }

    return count >= props.deck.questions.length + 1?
        <GoBack finish={props.finished}/>
        :<MainComp reveal={() => revealAnswer(true)} question={currentQuestion} answer={answer} buttons={buttonContainer}/>; 
}

export default Card;