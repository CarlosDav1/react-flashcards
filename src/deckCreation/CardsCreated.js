import React from 'react';
import './creation.css';
import '../index.css';
import trash from './delete.png'

function CardsCreated(props){
    let cardslist = props.list.map((i, ind) => 
        <div className="cardPreview" key={i[0]}>
            <p>{i[0]}</p>
            <button onClick={() => props.deleteCard(ind)}><img src={trash}/></button>
        </div>)

    return(
    <div className="cardsContainer">
        {cardslist}
    </div>
    );
}

export default CardsCreated;