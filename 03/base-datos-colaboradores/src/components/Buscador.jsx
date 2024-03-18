import React, { useState } from 'react';
import Listado from './Listado';

function Buscador({ colaboradores }) {
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador =>
    Object.values(colaborador).some(value =>
      value.toString().toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  return (
    <div>
      <input 
        type="text"
        placeholder='Busca un Colaborador'
        value={busqueda}
        onChange={handleBusquedaChange}
      />
      <br />
      {busqueda.trim() !== '' && <Listado colaboradores={colaboradoresFiltrados} />}
    </div>
  );
}

export default Buscador;

