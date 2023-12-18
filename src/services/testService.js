import axios from "axios";
import authService from "./authService";

const API_URL = "http://www.vocatec.somee.com/api/Tests"; // Reemplaza con la URL de tu API

const testService = {
  createTest: async (nombre) => {
    try {
      console.log(nombre);
      const token = authService.getToken();
      console.log("Token:" + token);
      const response = await axios.post(`${API_URL}`, nombre, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  },

  getTests: async () => {
    try {
      const token = authService.getToken();
      console.log("Token:" + token);
      const response = await axios.get(`${API_URL}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {}
  },
};

export default testService;
