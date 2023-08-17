import React, { useState } from 'react';
import './App.css';
import Form from './Componentes/Form';
import Card from './Componentes/Card';

function App() {
  const [elCard, setElCard] = useState({ nombre: '', color: '' });

  function handleSubmit(nombre, color) {
    setElCard({ nombre, color });
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
      {elCard.nombre ? (
        <Card nombre={elCard.nombre} color={elCard.color} />
      ) : (
        <p>Tu nombre y color favorito es</p>
      )}
    </>
  );
}
//se me rompio todo que ni el react me quiere importar D:
export default App;
