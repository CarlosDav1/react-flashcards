import React, { useEffect, useState } from 'react';
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
                <button onClick={props.wrong} className="wrong">Wrong</button>
                <button onClick={props.correct} className="correct">Right</button>
            </div>
        </>
    );
}

function MainComp(props){
    return(
        <>
            <div className="cardContainer" onClick={props.reveal}>
                <div className="decoration">
                <h1 className="questionStyle">{props.question}</h1>
                {props.answer}
                </div>
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
            <Link to="/"><button onClick={props.finish}>Go Back</button></Link>
        </>
    );
}

function Card(props){
    let [isRevealed, revealAnswer] = useState(false);
    let [currentQuestion, setQuestion] = useState('');
    let [currentAnswer, setAnswer] = useState('');
    let [end, setEnd] = useState(false);
    let [original, setOriginal] = useState([]);
    
    let answer = isRevealed? <Answer ans={currentAnswer}/>: null;
    let buttonContainer = isRevealed? <ButtonDiv correct={() => Correct()} wrong={() => Wrong()}/> : null;

    useEffect(async () => {
        original = await ((props.deck.cards.map(num => num)).sort(() => Math.random() - 0.5));
        setOriginal(original);
        NextQuestion();
    }, [])

    function Correct(){
       original.shift();
       setOriginal(original);
       revealAnswer(false);

        if (!original.length == 0){NextQuestion();}
        else{setEnd(true)}
    }

    function Wrong(){
        original.push(original[0]);
        original.shift();

        setOriginal(original);
        NextQuestion();
        revealAnswer(false);
    }

    async function Retry(){
        original = await ((props.deck.cards.map(num => num)).sort(() => Math.random() - 0.5));
        setOriginal(original);
        NextQuestion();
        setEnd(false);
        revealAnswer(false);
    }

    function NextQuestion(){
        setQuestion(() => original[0][0]);
        setAnswer(() => original[0][1]); 
    }

    return end? <GoBack finish={() => props.finished(null)} retry={Retry}/>:
    <MainComp reveal={() => revealAnswer(true)} question={currentQuestion} answer={answer} buttons={buttonContainer}/>;
}

export default Card;