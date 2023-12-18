import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navegation from "./Navegation";
import questionService from "../services/questionService";
import testService from "../services/testService";
const Question = () => {
  const [question, setQuestion] = useState("");
  const [selectedTestId, setSelectedTestId] = useState("");
  const [tests, setTests] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await testService.getTests();
        setTests(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de tests", error);
      }
    };

    fetchTests();
  }, []);

  const handleQuestion = async () => {
    try {
      console.log("antes de enviarlo el test");
      const response = await questionService.createQuestion(
        JSON.stringify({ idTest: selectedTestId, contenidoPregunta: question })
      );

      console.log("Create question successful", response);
      setQuestion("");
      setSelectedTestId("");
      history.push("/home");
    } catch (error) {
      console.error("Error al crear pregunta", error);
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
                <h3 className="card-title text-center mb-4">Crear pregunta</h3>
                <div className="mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                      value={selectedTestId}
                      onChange={(e) => setSelectedTestId(e.target.value)}
                    >
                      <option defaultValue>Escoje un test</option>
                      {tests.map((test) => (
                        <option key={test.idTest} value={test.idTest}>
                          {test.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Pregunta"
                    className="form-control"
                    id="contenidoPregunta"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>
                <button onClick={handleQuestion} className="btn btn-primary">
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

export default Question;
