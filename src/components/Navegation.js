// src/components/Navegation.js
import React from "react";
import authService from "../services/authService";
import { useHistory } from "react-router-dom";

const Navegation = () => {
  const history = useHistory();

  const HandleSignOut = async () => {
    authService.signOut();
    history.push("/login");
  };

  return (
    <nav
      className="navbar bg-dark navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Tecnologico
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/Menu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/Question">
                    Preguntas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Section">
                    Secciones
                  </a>
                </li>
                <li>
                  <button className="dropdown-item" onClick={HandleSignOut}>
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
