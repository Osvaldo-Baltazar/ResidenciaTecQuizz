import axios from "axios";
import authService from "./authService";

const API_URL = "http://www.vocatec.somee.com/api/Preguntas";

const questionService = {
  createQuestion: async (question) => {
    try {
      console.log(question);
      const token = authService.getToken();
      console.log("Token:" + token);
      const response = await axios.post(`${API_URL}`, question, {
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
};

export default questionService;
