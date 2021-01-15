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

function Button(props){return <button onClick={props.toggleEvent}>{props.correctOrNo}</button>;}

function Card(){
    let [isRevealed, revealAnswer] = useState(false);
    
    function ToggleReveal(){
        revealAnswer(prevState => prevState = !prevState);
    }

    let a = isRevealed? <Answer />: null;
    let b = isRevealed? 
        <>
            <div className="buttonContainer">
                <Button correctOrNo="X" toggleEvent={ToggleReveal}/>
                <Button correctOrNo="O" toggleEvent={ToggleReveal}/>
            </div>
        </>
        : null;

    
    return (
        <>
        <div className="cardContainer" onClick={ToggleReveal}>
            <h1 className="questionStyle">This is a question</h1>
            {a}
        </div>

        {b}
        </>
    ); 
}

export default Card;