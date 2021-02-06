import React, { useState } from 'react';

function DeckData(props){
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    
    let handleDeckName = event => setName(event.target.value);
    let handleDeckDescription = event => setDescription(event.target.value);

    return(
        <>  
            <div className="form">
                <div className="decoration">
                    <textarea className="question" placeholder="Deck name" value={name} onChange={handleDeckName}></textarea>
                    <div className="divisionLine"></div>
                    <textarea className="answer" placeholder="Deck description" value={description} onChange={handleDeckDescription}></textarea>
                </div>
            </div>

            <div className="bContainer">
                <button className="greenB" onClick={() => {

                    if(name.length == 0 || description.length == 0) {alert("The values cannot be empty");}
                    else{props.setNandD([name, description])}

                    }}>Next</button> 
            </div> 
        </>
    );
}

export default DeckData;