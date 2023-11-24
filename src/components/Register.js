import React, { useState } from "react";
import authService from "../services/authService";
import { useHistory } from "react-router-dom";
import NavegationApp from "./NavegationApp";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const history = useHistory();

  const handleRegister = async () => {
    try {
      console.log("antes de enviarlo el registro");
      const response = await authService.register(
        JSON.stringify({ nombre, apellidos, correo, contraseña })
      );

      console.log("Register successful", response);
      setCorreo("");
      setPassword("");
      setNombre("");
      setApellidos("");
      history.push("/login");
    } catch (error) {
      console.error("Error al registrarse", error);
      console.log("Error details:", error.response);
    }
  };

  return (
    <div>
      <NavegationApp></NavegationApp>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Registrar</h3>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control"
                    id="Nombre"
                    aria-describedby="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="apellidos"
                    className="form-control"
                    id="apellidos"
                    aria-describedby="apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Correo"
                    className="form-control"
                    id="correo"
                    aria-describedby="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="contraseña"
                    value={contraseña}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button onClick={handleRegister} className="btn btn-primary">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
