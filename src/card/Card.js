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
                <button onClick={props.wrong}>X</button>
                <button onClick={props.correct}>O</button>
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
            <h1>Congratulations! You Finished the deck</h1>
            <p>Do you want to retry or do you want to go back?</p>
            <button onClick={props.retry}>Retry</button>
            <button onClick={props.finish}>Go Back</button>
        </>
    );
}

function Card(props){
    let [isRevealed, revealAnswer] = useState(false);
    let [currentQuestion, setQuestion] = useState('');
    let [currentAnswer, setAnswer] = useState('');
    let [end, setEnd] = useState(false);

    let [original, setOriginal] = useState(props.deck.cards.map(num => num));
    
    let answer = isRevealed? <Answer ans={currentAnswer}/>: null;
    let buttonContainer = isRevealed? <ButtonDiv correct={() => Correct()} wrong={() => Wrong()}/> : null;

    useEffect(() => {
        setOriginal(prev => prev.sort(() => Math.random() - 0.5));
        NextQuestion(true);
    }, [])

    function Correct(){
       original.shift();
       setOriginal(original);

        if (!original.length == 0){
            NextQuestion(false);
        }
        else{setEnd(true)}
    }

    function Wrong(){
        
    }

    async function Retry(){
        original = await ((props.deck.cards.map(num => num)).sort(() => Math.random() - 0.5));
        setOriginal(original);
        NextQuestion(false);
        setEnd(false);
    }

    function NextQuestion(isFirst){
        if(!isFirst){revealAnswer(prevState => prevState = !prevState)}

        setQuestion(() => original[0][0]);
        setAnswer(() => original[0][1]); 
    }

    return end? <GoBack finish={props.finished} retry={Retry}/>:
    <MainComp reveal={() => revealAnswer(true)} question={currentQuestion} answer={answer} buttons={buttonContainer}/>;
}

export default Card;