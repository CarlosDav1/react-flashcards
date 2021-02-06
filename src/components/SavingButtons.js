import React from 'react';
import { Link } from 'react-router-dom';

function SavingButtons(props){
    return(
        <div className="buttonsContainer">
            <button onClick={props.saveDeck}><Link to="/" className="greenColor">Save Deck</Link></button>
            
            <button  className="greenB" onClick={() => {

                if(props.question.length == 0 || props.answer.length == 0) {alert("The values cannot be empty");}
                else{props.createCard([props.question, props.answer]);}

                }}>Save Card</button> 
        </div> 
    );
}

export default SavingButtons;