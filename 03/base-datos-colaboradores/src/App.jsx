
import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import { BaseColaboradores } from './assets/BaseColaboradores';
import Buscador from "./components/Buscador";
import Alert from './components/Alert';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  return (
    <div className='container'>
      <div className='body'>
        <br />
        <h1>Listado de Colaboradores</h1>
        <br />
        <div className='buscador'>
        <Buscador colaboradores={colaboradores}/>
           <br />
        </div>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='tabla'>
              <Listado colaboradores={colaboradores} />
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='input'>
              <h3>Agregar Colaborador</h3>
              <br />
              <Formulario agregarColaborador={agregarColaborador} />
              {/* <Alert type={type} message={message}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// mensaje secreto para commit
export default App;



