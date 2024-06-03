import Card from './components/Card';

import Navbar from './components/Navbar';
import pizzam from './immagini/pizzam.jpg';
import React, { useState } from 'react';

function App() {
  const [cards, setCards] = useState([
    { id: 0, nome: "Margherita", prezzo: 5.99, immagine: pizzam },
    { id: 1, nome: "Margherita", prezzo: 5.99, immagine: pizzam },
    { id: 2, nome: "Margherita", prezzo: 5.99, immagine: pizzam },
    { id: 3, nome: "Margherita", prezzo: 5.99, immagine: pizzam },
    { id: 4, nome: "Margherita", prezzo: 5.99, immagine: pizzam },
    { id: 5, nome: "Margherita", prezzo: 5.99, immagine: pizzam },
  ]);

  const handleDelete = cardId => {


    function stabilisci(card) {
      if (card.id === cardId) {
        return false
      } else {

        return true
      }

    }
    function filtro(cards) {
      return cards.filter(stabilisci)
    }

    setCards(filtro)
  }

  return (
    <>
      <Navbar />
      <div className="Container">
        <h2 className="clearfix" style={{ textAlign: 'center' }}>Cosa desidera Ordinare?</h2>
        <hr />
        <div className='row'>
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              nome={card.nome}
              prezzo={card.prezzo}
              immagine={card.immagine}
              onDelete={handleDelete} />

          ))}
        </div>
      </div>
    </>
  );
}

export default App;
