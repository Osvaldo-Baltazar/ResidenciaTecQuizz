// src/components/Dashboard.js
import React from "react";
import Navegation from "./Navegation";
const Home = () => {
  return (
    <div>
      <Navegation />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Bienvenido a mi aplicación</h1>
            <p>Esta es una página para la residencia del tec.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
