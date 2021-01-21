import React from 'react';
import './creation.css';
import '../index.css';

function SavingButtons(props){
    return(
        <div className="buttonsContainer">
            <button className="saveDeck" onClick={props.saveDeck}>Save Deck</button>
            
            <button  onClick={() => {

                if(props.question.length == 0 || props.answer.length == 0) {alert("The values cannot be empty");}
                else{props.createCard([props.question, props.answer]);}

                }}>
            Save Card</button> 
        </div> 
    );
}

export default SavingButtons;