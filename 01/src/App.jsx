import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyCard from './MyCard';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
        

        <div className="container">

        <Header title="Adopta Un Perrito" />
        <br />

        <div className="cards-container"> 
        
        <MyCard 
              image="https://placedog.net/642"
              title="Pastor pobre"
              text="Una mezcla de pastor australiano y border collie, te ordenará la vida"
              colorButton="success"
              textButton="Pastor Australiano"
              />
        <MyCard 
              image="https://placedog.net/641"
              title="Elegant"
              text="Solo acampañará a gente sofisticada como tú, aprovecha, solo por hoy."
              colorButton="primary"
              textButton="Husky"
              />
        <MyCard 
              image="https://placedog.net/502"
              title="Grumpys"
              text="El más corredor de su camada, siempre te acompañará al running"
              colorButton="danger"
              textButton="Beagle"
              />
        <MyCard 
              image="https://placedog.net/503"
              title="Cortiño"
              text="Nacido de esta manera no podrás dejar de abrazarlo y juguetear"
              colorButton="warning"
              textButton="Lobo"
              />
</div>
<br />
<br />
<Footer />
  
</div>

            
                

  );
};

export default App;
