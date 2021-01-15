import React, { useState } from 'react';
import './card.css'

function Answer(){
    return(
        <>
            <div className="divisionLine"></div>
            <p className="answerStyle">This is an answer</p>
        </>
    );
}

function Buttons(){
    return(
        <>
            <div className="buttonContainer">
                <button className="correct">O</button>
                <button className="wrong">X</button>
            </div>
        </>
    );
}

function Card(){
    let [isRevealed, revealAnswer] = useState(false);
    let a = isRevealed? <Answer />: null;
    let b = isRevealed? <Buttons />: null;

    function Reveal(){
        revealAnswer(prevState => prevState = true);
    }

    return (
        <>
        <div className="cardContainer" onClick={Reveal}>
            <h1 className="questionStyle">This is a question</h1>
            {a}
        </div>

        {b}
        </>
    ); 
}

export default Card;