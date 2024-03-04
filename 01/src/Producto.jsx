import React from 'react'

const Producto = (props) => {
    const {nombre, precio} = props
  return (
    <div>
      <p>{nombre}</p>
      <p>Precio: ${precio}</p>
    </div>
  )
}

export default Producto
