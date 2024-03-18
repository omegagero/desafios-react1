import React from 'react'
import Formulario from "./Formulario";
import SocialButton from './SocialButton';
import './Registro.css';




function Registro() {
  return (
    <>
    <div className="registro-container">
        <SocialButton type="facebook" size="2x"/>
        <SocialButton type="github"/>
        <SocialButton type="linkedin"/>
    </div>
    <p>O usa tu email para registrarte</p>
        <Formulario />
    </>
  )
}

export default Registro