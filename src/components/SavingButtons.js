import React from 'react';
import { Link } from 'react-router-dom';

function SavingButtons(props){
    return(
        <div className="buttonsContainer">
            <button className="saveDeck" onClick={props.saveDeck}><Link to="/">Save Deck</Link></button>
            
            <button  onClick={() => {

                if(props.question.length == 0 || props.answer.length == 0) {alert("The values cannot be empty");}
                else{props.createCard([props.question, props.answer]);}

                }}>Save Card</button> 
        </div> 
    );
}

export default SavingButtons;