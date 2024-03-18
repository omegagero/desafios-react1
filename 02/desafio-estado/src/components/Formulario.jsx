import { useState } from "react";
import './Formulario.css';
import Alert from "./Alert";



const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault()
    
    setError(false);
    setErrorMessage('');
    setSuccess(false);

    if(nombre === '' || email === '' || password === '' || password2 === '') {
      setError(true);
      setErrorMessage('Todos los campos son obligatorios');
        return
    }
    // Validar que las contraseñas sean iguales
    if(password !== password2) {
      setError(true);
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    // Validar el formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      setErrorMessage('Formato de email inválido');
      return;
    }
    setSuccess(true);
    setNombre('');
    setEmail('');
    setPassword('');
    setPassword2('');
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        
        <div className="form-group">
          
          <input
            placeholder="Nombre"
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          <br />
        </div>
        <div className="form-group">
          <input
          placeholder="email@ejemplo.com"
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <br />
        <div className="form-group">
          
          <input
          placeholder="Contraseña"
            type="text"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
        </div>
        <div className="form-group">
            <input
            placeholder="Confirma tu contraseña"
            type="text"
            name="password2"
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        <br />
        <br />
        {error && <Alert type="danger" message={errorMessage} />}
        {success && <Alert type="success" message="Datos ingresados correctamente" />}

      </form>
      {/* <h3>Datos ingresados</h3>
      {nombre} - {email} - {password} - {password2} */}
    </>
  );
};

export default Formulario;
