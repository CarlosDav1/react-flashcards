import React, { useState } from 'react';
import './card.css'

function Card(){
    const [question, setQuestion] = useState('first question');

    return (
        <div className="cardContainer">
            <h1 className="questionStyle">{question}</h1>
            <div className="divisionLine"></div>
            <p className="answerStyle">This is an answer</p>
        </div>
    );
}

export default Card;