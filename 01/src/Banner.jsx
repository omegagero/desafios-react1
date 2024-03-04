import React from 'react';

const Banner = () => {
    console.log("Creando un texto")
    const productName ="Producto 1"
  return (
    <div className="banner">
      <h2>Banner Component</h2>
      <h1>{productName}</h1>;
      <p>Operaciones matemáticas SUma: {2+2}</p>
      
      <p className='producto'>Hola Mundo</p>
    </div>
  );
};

export default Banner;
