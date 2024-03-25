import React, { useState, useEffect } from "react";
import Buscador from "./Buscador";

//acá se está definiendo el componente funcional MiApi que recibe el props onIndicesLoaded
const MiApi = ({onIndicesLoaded}) => {
  console.log("Valor de onIndicesLoaded:", onIndicesLoaded);
  const [info, setInfo] = useState([]); //Acá se van a guardar los índices obtenidos en la api
  const [filteredIndices, setFilteredIndices] = useState([]); //índices almacenados del filtro buscador

  useEffect(() => { //usseEffec usado para llamar a la API solo una vez
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = "https://mindicador.cl/api";
      const response = await fetch(url);
      const data = await response.json();
      
      //Se inicializa indicadores. El problema de los 3 primeros elementos, y filtrar solo los elementos que son indicadores económicos
      const indicadores = Object.keys(data)
        .filter(key => data[key].valor !== undefined)
        .reduce((obj, key) => {
          obj[key] = data[key];
          return obj;
        }, {});

        //se ordenan los índices por nombre alfabéticamente
        const sortedIndices = Object.values(indicadores).sort((a, b) => a.nombre.localeCompare(b.nombre));


      setInfo(indicadores); //actualiza el estado de "info" (indicadores)
      setFilteredIndices(sortedIndices); // Inicializar filteredIndices con todos los índices
      // Llamar a la función proporcionada por props una vez que los índices estén cargados
      
      
      //console.log("Valor de onIndicesLoaded:", onIndicesLoaded);
      // onIndicesLoaded(sortedIndices);
      console.log("Valor de Sorted indicadores:",sortedIndices);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  const handleBusquedaChange = (busqueda) => {
    const indicesFiltrados = Object.values(info).filter(indice =>
      indice.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFilteredIndices(indicesFiltrados);
  };

  return (
    <div className="container">
      
      <Buscador onBusquedaChange={handleBusquedaChange} />
      <br />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Unidad de Medida</th>
          </tr>
        </thead>
        <tbody>
          {filteredIndices.map(indicador => (
            <tr key={indicador.codigo}>
              <td style={{ textAlign: 'left' }}>{indicador.nombre}</td>
              <td>{indicador.valor}</td>
              <td>{indicador.unidad_medida}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;


