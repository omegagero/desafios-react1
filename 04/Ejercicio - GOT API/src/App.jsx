import React, { useState } from "react";
import "./App.css";
import MiApi from "./MiApi";
import Buscador from "./Buscador";

function App() {
  const [indices, setIndices] = useState([]);

  const handleIndicesLoaded = (nuevosIndices) => {
    setIndices([nuevosIndices]);
    //console.log(handleIndicesLoaded);
   // console.log(nuevosIndices);
  };

  return (
    <div>
      <h2>Indicadores económicos</h2>
      <MiApi onIndicesLoaded={handleIndicesLoaded} />
      <br />
     
    </div>
  );
}

export default App;

