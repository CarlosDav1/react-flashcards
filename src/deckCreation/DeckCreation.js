import React, { useState } from 'react';
import './creation.css';
import '../index.css';

function CreateCard(){
    let [question, questionValue] = useState(null);
    let [answer, answerValue] = useState(null);

    let handleInputQuestion = event => questionValue(event.target.value);
    let handleInputAnswer = event => answerValue(event.target.value);

    function printValue(q, a){
        console.log(q + " " + a);
    }

    return(
        <>
            <div className="mainContainer">
                <textarea className="question" placeholder="Question" onChange={handleInputQuestion}></textarea>
                <div className="divisionLine"></div>
                <textarea className="answer" placeholder="Answer" onChange={handleInputAnswer}></textarea>
            </div>

            <div>
                <button onClick={() => printValue(question, answer)}>Save</button>
            </div>
        </>
    );
}

function EditCard(props){
    return(
        <>
            <div className="mainContainer">
                <textarea className="question" required>{props.question}</textarea>
                <div className="divisionLine"></div>
                <textarea className="answer" required>{props.answer}</textarea>
            </div>

            
            <div>
                <button>Delete</button>
                <button>Edit</button>
                <button>Save</button>
            </div>
        </>  
    );
}

function CardsCreated(){
    return(
        <div className="previousCards">
            <div className="recentlyCreated"></div>
            <div className="recentlyCreated"></div>
            <div className="recentlyCreated"></div>
        </div>
    );
}

function DeckCreation(){
    return(
        <>
            <CreateCard />
            <CardsCreated />
        </>
    )
}

export default DeckCreation;