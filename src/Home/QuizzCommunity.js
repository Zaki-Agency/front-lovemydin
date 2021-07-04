import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./QuizzCommunity.css";
import Quizz from "../Quizz/Quizz";



import axios from "axios";


function QuizzCommunity() {
 
  const [data, setData] = useState([]);
  const [start] = useState(false);
  const [numero] = useState();
  const [value, setValue] = useState("");

  const history = useHistory()

  useEffect(() => {
    const QuizzApi = `${process.env.REACT_APP_API}/quizz`;
    axios
      .get(QuizzApi)
      .then((res) => {
        // console.log(res.data)
        setData(res.data);
        // console.table(res.data);
        // console.log(res.data[0].question)
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, []);



  function onNavigateQuizz(quizz) {
    console.log(quizz)
    history.push(`Quizz/${quizz.uuid}`);
  }


  
  return (
    <>
      {start === true ? (
        <div>
          {/* <h3>Vous pouvez ici configurez votre quizz</h3> */}
          <div>
            <Quizz quizzs={data[numero].question} />
          </div>
       
        </div>
      ) : (
        <div>
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-5 ">
              <div>
                <input
                  style={{
                    width: "500px",
                    padding: "20",
                    height: "50px",
                    borderColor: "rgb(63, 177, 163)",
                  }}
                  type="text"
                  placeholder="Chercher un Quizz par son identifiant unique ..."
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  style={{
                    backgroundColor: "rgb(63, 177, 163)",
                    color: "white",
                    marginLeft: "5px",
                    height: "50px",
                    padding: "5px",
                  }}
                >
                  Rechercher
                </button>
              </div>
            </div>
          </div>

          <div className="grille mt-5 ">
            {data
              .filter((quizz) => quizz.uuid.toLowerCase().includes(value))
              .map((quizz, index) => (
                <div
                  key={index}
                  className="card text-center"
                  style={{ width: "18rem", height: "25rem" }}
                >
                  <div className="card-header ">
                    Catégorie : {quizz.category}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{quizz.title}</h5>
                    <p className="card-text">{quizz.description} </p>
                    <p>crée by : </p>
                    <p>Vues : 87500</p>
                    <p>identifiant : {quizz.uuid}</p>
                    <div className="play-count">
                      <p>Joué : 2750 fois </p>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => onNavigateQuizz(quizz)}
                      className="button-primary "
                    >
                      Commencer
                    </button>

                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default QuizzCommunity;
