// Formulario.jsx
import React, { useState } from 'react';
import App from '../App';
import Alert from './Alert';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contador, setContador] = useState(4);
  const [error, setError] = useState(false);
  const [errorMessage,setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("");
    setSuccess(false);
   


    if( nombre === '' ||  email === '' ||  edad === '' ||  cargo === '' ||  telefono === '' ){
        setError(true);
        setErrorMessage('Completa todos los campos');
        
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      setErrorMessage('Formato de email inválido');
      return;
    }

    // <Alert type={type} message={message}/>
    
    // {error && <App type="danger" message={errorMessage} />}
    // {success && <App type="danger" message={errorMessage} />}
    
     // Crear un nuevo colaborador
    const nuevoColaborador = {
      id: contador.toString(),
      nombre,
      correo: email,
      edad,
      cargo,
      telefono
    };

    // Agregar el nuevo colaborador a la lista
    agregarColaborador(nuevoColaborador);

    // Limpiando formulario
    setSuccess(true)
    setNombre('');
    setEmail('');
    setEdad('');
    setCargo('');
    setTelefono('');

    setContador(contador+1);

  };

  return (
    <form className='formulario' onSubmit={enviarFormulario}>
      <div className='form-group'>
        <input 
          placeholder='Nombre Del Colaborador'
          type='text'
          name='nombre'
          className='form-control'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <br />
        <input 
          placeholder='eMail Del Colaborador'
          type='text'
          name='email'
          className='form-control'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input 
          placeholder='Edad Del Colaborador'
          type='number'
          name='edad'
          className='form-control'
          onChange={(e) => setEdad(e.target.value)}
          value={edad}
        />
        <br />
        <input 
          placeholder='Cargo Del Colaborador'
          type='text'
          name='cargo'
          className='form-control'
          onChange={(e) => setCargo(e.target.value)}
          value={cargo}
        />
        <br />
        <input 
          placeholder='Teléfono Del Colaborador'
          type='text'
          name='telefono'
          className='form-control'
          onChange={(e) => setTelefono(e.target.value)}
          value={telefono}
        />
        <br />
      </div>

      <button type='submit' className='btn btn-info' style={{ display: 'block', margin: '0 auto' }}>
      Agregar Colaborador
</button>


      <br />
      {error && <Alert type="danger" message={errorMessage} />}
  
      {success && <Alert type="success" message={`Colaborador Agregado (ID=${contador-1})`} />}
    </form>
  );
}

export default Formulario;

