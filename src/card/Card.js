import React, { useState } from 'react';

function Card(){
    const [question, setQuestion] = useState('first question');

    return (
        <div className="cardContainer">
            <h1>{question}</h1>
        </div>
    );
}

export default Card;