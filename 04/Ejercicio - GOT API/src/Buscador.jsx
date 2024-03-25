import React, { useState } from "react";

const Buscador = ({ onBusquedaChange }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChangeLocal = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    onBusquedaChange(valor);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Buscar índice económico"
        value={busqueda}
        onChange={handleBusquedaChangeLocal}
      />
    </div>
  );
}

export default Buscador;


