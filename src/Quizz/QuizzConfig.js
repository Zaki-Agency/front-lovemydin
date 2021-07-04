import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Quizz from "./Quizz";
import axios from "axios";

export default function QuizzConfig() {
  const [start, setStart] = useState(false);
  const [nbQuestion, setNbQuestion] = useState(4);
  const [categorie, setCategorie] = useState([]);
  const [setCheckbox] = useState([false, false, false, false, false]);
  const [Name, setName] = useState("");

  const [data, setData] = useState([]);
  const [quizz] = useState({
    title: "A remplir",
    category: "A remplir",
    difficulty: "1",
    description: "A remplir",
    source: "A spécifier",
    number: 99,
    question: [],
  });

  const generateQuestion = (data) => {

    let i = 0;
    for (i = 0; i < data.length; i++) {
      quizz.question.push(data[i]);
    }
    // console.log(quizz.question);
  };

  const nombreQuestion = (nbQuestion) => {
    let newarray = { ...quizz };

    //      const questions =  newarray.slice(0, nbQuestion);
    //      console.log(questions)
    //      quizz.question = questions
    //      console.log(quizz.question)
  };

  useEffect(() => {

    const QuizzApi = `${process.env.REACT_APP_API}/questions`;
    axios
      .get(QuizzApi)
      .then((res) => {
        setData(res.data);
        generateQuestion(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, []);

  const startQuizz = () => {

    if (Name.length < 4)
      window.alert(
        "Merci d'entrer votre pseudo pour commencer le quizz (minimum 4 caractères"
      );
    setStart(Name.length > 3 ? !start : false);
  };

  const AddCategorie = (theme, e) => {
    if (categorie.includes(theme)) {
      const index = categorie.indexOf(theme);
      const copy = [...categorie];
      copy.splice(index, 1);
      setCategorie(copy);
      setCheckbox(true);
    } else {
      setCategorie((categorie) => [...categorie, theme]);
      setCheckbox(e.target.checked);
    }
  };

  return (
    <div>
      {Name.length > 3 && start === true ? (
        <div>
          <Quizz quizzs={quizz.question} nombre={nbQuestion} name={Name} />
        </div>
      ) : (
        <>
          {categorie}
          <div className="container">
            <div style={{ height: 500 }} className="row ">
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                <h6>
                  Pour commencer le Quizz merci de configurer les options
                  suivantes : la difficulté, le nombre de question (En cour de
                  développement ...)
                </h6>
              </div>

              <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Votre Pseudo :</Form.Label>
                    <Form.Control
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Entrer un pseudo"
                      required
                      value={Name}
                    />
                  </Form.Group>

                  <Form.Group controlId="formNasicRange">
                    <Form.Label>
                      Nombre de série (10 questions par série)
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setNbQuestion(e.target.value)}
                      type="range"
                      min="0"
                      max="30"
                      step="5"
                      value={nbQuestion}
                      style={{ color: "purple" }}
                    />
                    <p>Questions : {nbQuestion}</p>
                  </Form.Group>

                  {/* <Form.Label
                    className="my-1 mr-2"
                    htmlFor="inlineFormCustomSelectPref"
                  >
                    Difficulté
                  </Form.Label> */}
                  {/* <Form.Control
                    onClick={(e) => setLevel(e.target.value)}
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option value="0">Facile</option>
                    <option value="1">Moyen</option>
                    <option value="2">Intermédiaire</option>
                    <option value="3">Difficile</option>
                    <option value="4">Expert</option>
                  </Form.Control> */}
                  {/* <p>Choix catégorie :</p>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        onChange={(e) => AddCategorie("toutes", e)}
                        inline
                        label="Toutes"
                        type={type}
                        id={`inline-${type}-1`}
                        checked={checkbox[0]}
                      />
                      <Form.Check
                        onChange={(e) => AddCategorie("coran", e)}
                        inline
                        label="coran"
                        type={type}
                        id={`inline-${type}-2`}
                        checked={checkbox[1]}
                      />

                      <Form.Check
                        onChange={(e) => AddCategorie("ramadan", e)}
                        inline
                        label="ramadan"
                        type={type}
                        id={`inline-${type}-3`}
                        checked={checkbox[2]}
                      />
                      <Form.Check
                        onChange={(e) => AddCategorie("prières", e)}
                        inline
                        label="prière"
                        type={type}
                        id={`inline-${type}-4`}
                        checked={checkbox[3]}
                      />
                    </div> */}
                  {/* ))} */}
                </Form>
              </div>
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-start">
                <button onClick={() => startQuizz()} className="button-primary">
                  Lancer mon Quizz
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
