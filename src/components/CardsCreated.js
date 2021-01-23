import React from 'react';
import '../styles/creation.css';
import '../index.css';
import trash from '../icons/delete.png'
import edit from '../icons/edit.png'

function CardsCreated(props){
    let cardslist = props.list.map((i, ind) => 
        <div className="cardPreview" key={i[0]}>
            <p>{i[0]}</p>
            <div>
                <button onClick={() => props.editCard(i[0], i[1], ind)}><img src={edit}/></button>
                <button onClick={() => props.deleteCard(ind)}><img src={trash}/></button>
            </div>
        </div>)

    return(
    <div className="cardsContainer">
        {cardslist}
    </div>
    );
}

export default CardsCreated;