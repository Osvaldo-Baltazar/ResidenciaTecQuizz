import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navegation from "./Navegation";
import testService from "../services/testService";

const Section = () => {
  const [nombre, setNombre] = useState("");
  const history = useHistory();

  const handleTest = async () => {
    try {
      console.log("antes de enviarlo el test");
      const response = await testService.createTest(JSON.stringify({ nombre }));

      console.log("Create test successful", response);
      setNombre("");
      history.push("/home");
    } catch (error) {
      console.error("Error al crear test", error);
      console.log("Error details:", error.response);
    }
  };

  return (
    <div>
      <Navegation></Navegation>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Crear Test</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Nombre del test"
                    className="form-control"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <button onClick={handleTest} className="btn btn-primary">
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
