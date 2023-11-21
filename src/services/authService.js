import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://www.vocatec.somee.com/api/usuarios"; // Reemplaza con la URL de tu API

const authService = {
  login: async (credentials) => {
    try {
      console.log(`Llega al authservice`);
      console.log(credentials);
      const response = await axios.post(`${API_URL}/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        const { token } = response.data.result;
        const { idUsuario } = response.data.result.usuario;
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("idUser", idUsuario);
      } else {
        throw new Error("Token no encontrado en la respuesta");
      }
    } catch (error) {
      throw error;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getToken: () => {
    return Cookies.get("token");
  },
};

export default authService;
