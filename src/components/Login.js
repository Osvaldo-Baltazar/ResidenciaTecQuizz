import React, { useState } from "react";
import authService from "../services/authService";
import { useHistory } from "react-router-dom";
import NavegationApp from "./NavegationApp";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      console.log("antes de enviarlo");
      const response = await authService.login(
        JSON.stringify({ correo, contraseña })
      );

      console.log("Login successful", response);

      setCorreo("");
      setPassword("");
      history.push("/home");
    } catch (error) {
      console.error("Error en el inicio de sesión", error);
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
                <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
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
                <button onClick={handleLogin} className="btn btn-primary">
                  Entrar
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
