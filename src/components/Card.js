import React from 'react';



function Card({id, nome, prezzo, immagine, onDelete}) {
    return(
        <div className="col">
            <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                <img src={immagine} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className='card-title'>Pizza {nome}</h5>
                    <p className="card-text">€{prezzo}</p>
                    <button onClick={()=> onDelete(id)} className='btn btn-outline-danger'>Elimina</button>
                </div>
                </div>
        </div>
    );
}
export default Card;