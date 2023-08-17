import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (event) => {
    const newNombre = event.target.value;
    setNombre(newNombre);
    setMensaje('');
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    setMensaje('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || nombre.trim() !== nombre) {
      setMensaje('Ingresar un nombre de al menos 3 letras');
    } else if (color.length < 6) {
      setMensaje('Ingresar un color que tenga al menos 6 caracteres');
    } else {
      setMensaje('');
      onSubmit(nombre, color);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="Color"
        />
      </div>
      <button type="submit">Enviar</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default Form;
