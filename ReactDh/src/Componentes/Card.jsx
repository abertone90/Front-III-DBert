// eslint-disable-next-line no-unused-vars
import React from 'react';

function Card({ nombre, color }) {
  return (
    <div>
      <p>Tu nombre es: {nombre}</p>
      <p>Tu color favorito es: {color}</p>
    </div>
  );
}

export default Card;
