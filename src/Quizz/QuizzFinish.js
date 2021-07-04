import React, { useEffect, useState } from "react";
import { FaMedal, FaHeartBroken } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import history from "../Navigation/History";
import QuizzResult from "./QuizzResult";
import axios from "axios";
import {
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

export default function QuizzFinish({
  length,
  score,
  restart,
  correct,
  heart,
  question,
  name,
}) {
  const [resume, setResume] = useState(false);
  const [setData] = useState([]);

  let message = "";
  const pourcentage = Math.round((score * 100) / (length * 5));
  switch (true) {
    case pourcentage < 30:
      message = "Quizz échoué";
      break;
    case pourcentage > 30 && pourcentage < 50:
      message = "C'est moyen";
      break;
    case pourcentage > 50 && pourcentage < 75:
      message = "Pas mal";
      break;
    case pourcentage > 75:
      message = "Félicitation";
      break;
    default:
      message = "Bien joué";
  }

  const goodAnswer = correct.filter(function (el) {
    return el === 1;
  });
  const wrongAnswer = correct.filter(function (el) {
    return el === 0;
  });
  const noAnswer = correct.filter(function (el) {
    return el === 2;
  });

  function onNavigateQuizzResult() {
    history.push("/QuizzResult");
  }

  const displayResume = () => setResume(!resume);
console.log("probleme")

  const id = useParams();


  // useEffect(() => {
  //   const rank = { score: score };
  //   axios
  //     .post(`${process.env.REACT_APP_API}/classement`, rank)
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [score]);

  return (
    <>
      <div>
        {resume ? (
          <div className="QuizzResult-wrapper ">
            <QuizzResult
              question={question}
              correct={correct}
              goodAnswer={goodAnswer.length}
              noAnswer={noAnswer.length}
              wrongAnswer={wrongAnswer.length}
            />
            <div className="wrapper-button">
              <button
                style={{ margin: 5 }}
                className="button-primary"
                onClick={restart}
              >
                Rejouer
              </button>
              <button
                style={{ width: "15rem" }}
                className="button-primary"
                onClick={() => displayResume()}
              >
                Revenir sur le résultat
              </button>
            </div>
          </div>
        ) : (
          <div>
            {heart > 1 ? (
              <div className=" Conteneur">
                <div className="card wrapper-finish card">
                  <p>ici le circle du résultat</p>
                  <IconContext.Provider
                    value={{
                      color: "#DAA520",
                      className: "mef-icon",
                      size: 80,
                    }}
                  >
                    <FaMedal />
                  </IconContext.Provider>

                  <h2>{message}</h2>

                  <h2>
                    Votre score finale est de :
                    <span style={{ color: "rgb(75, 119, 78)" }}>
                      {" " + score}
                    </span>
                  </h2>

                  <h2>
                    <span style={{ color: "rgb(75, 119, 78)" }}>
                      {pourcentage} % Bonne réponse
                    </span>
                  </h2>
                  <div className="wrapper-correct">
                    <p style={{ margin: 5 }}>
                      <span style={{ color: "green" }}>
                        {goodAnswer.length}
                      </span>{" "}
                      correct
                    </p>
                    <p style={{ margin: 5 }}>
                      <span style={{ color: "orange" }}>{noAnswer.length}</span>{" "}
                      sauté
                    </p>

                    <p style={{ margin: 5 }}>
                      <span style={{ color: "red" }}>{wrongAnswer.length}</span>{" "}
                      incorrect
                    </p>
                  </div>

                  <div className="social-share">
                    <span style={{ margin: 5, fontWeight: "600" }} className="">
                      Partager :
                    </span>
                    <FacebookShareButton
                      url="https://quizz-islam.netlify.app/"
                      quote={`j'ai joué à un quizz de ${length} question et j'ai eu un score de ${pourcentage}% sur lovemydin`}
                    >
                      <FacebookIcon
                        size={30}
                        iconFillColor="white"
                        round={true}
                      />
                    </FacebookShareButton>
                    <TwitterShareButton
                      title={`j'ai joué à un quizz de ${length} question et j'ai eu un score de ${pourcentage}% sur lovemydin`}
                      separator=" "
                      url="https://quizz-islam.netlify.app/"
                    >
                      <TwitterIcon
                        size={30}
                        iconFillColor="white"
                        round={true}
                      />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url="https://quizz-islam.netlify.app/"
                      separator=" "
                      title={`j'ai joué à un quizz de ${length} question et j'ai eu un score de ${pourcentage}% sur lovemydin`}
                    >
                      <WhatsappIcon
                        size={30}
                        iconFillColor="white"
                        round={true}
                      />
                    </WhatsappShareButton>
                  </div>

                  <div className="wrapper-button">
                    <button
                      style={{ margin: 5 }}
                      className="button-primary"
                      onClick={restart}
                    >
                      Rejouer
                    </button>

                    <button
                      style={{ margin: 5 }}
                      className="button-primary"
                      onClick={() => displayResume()}
                    >
                      Résumé
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="Conteneur">
                <div className="wrapper-finish card">
                  <IconContext.Provider
                    value={{ color: "black", className: "mef-icon", size: 80 }}
                  >
                    <FaHeartBroken />
                  </IconContext.Provider>

                  <h2>Plus de vie ! {name}</h2>

                  <h2>
                    Votre score finale est de :
                   
                  </h2>

                  <div id="cont" data-pct={score}>
                    <svg
                      id="svg"
                      width="200"
                      height="200"
                      viewport="0 0 100 100"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        r="90"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        strokeDasharray="400"
                        strokeDashoffset="400"
                      ></circle>
                      <circle
                        id="bar"
                        r="90"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        strokeDasharray="500"
                        strokeDashoffset={440-((440*87)*100)}
                      ></circle>
                    </svg>
                  </div>

                  <h2>
                    <span style={{ color: "rgb(75, 119, 78)" }}>
                      {Math.round((score * 100) / (length * 5))} % Bonne réponse
                    </span>
                  </h2>

                  <div className="wrapper-correct">
                    <p style={{ margin: 5 }}>
                      <span style={{ color: "green" }}>
                        {goodAnswer.length}
                      </span>{" "}
                      correct
                    </p>
                    <p style={{ margin: 5 }}>
                      <span style={{ color: "orange" }}>{noAnswer.length}</span>{" "}
                      sauté
                    </p>

                    <p style={{ margin: 5 }}>
                      <span style={{ color: "red" }}>{wrongAnswer.length}</span>{" "}
                      incorrect
                    </p>
                  </div>

                  <div className="social-share">
                    <span style={{ margin: 5 }} className="">
                      Partager :
                    </span>
                    <FacebookShareButton
                      url="https://quizz-islam.netlify.app/"
                      quote={`j'ai joué à un quizz de ${length} question et j'ai eu un score de ${pourcentage}% sur lovemydin`}
                    >
                      <FacebookIcon
                        size={30}
                        iconFillColor="white"
                        round={true}
                      />
                    </FacebookShareButton>
                    <TwitterShareButton
                      title={`j'ai joué à un quizz de ${length} question et j'ai eu un score de ${pourcentage}% sur lovemydin`}
                      separator=" "
                      url="https://quizz-islam.netlify.app/"
                    >
                      <TwitterIcon
                        size={30}
                        iconFillColor="white"
                        round={true}
                      />
                    </TwitterShareButton>
                    <WhatsappShareButton
                      url="https://quizz-islam.netlify.app/"
                      separator=" "
                      title={`j'ai joué à un quizz de ${length} question et j'ai eu un score de ${pourcentage}% sur lovemydin`}
                    >
                      <WhatsappIcon
                        size={30}
                        iconFillColor="white"
                        round={true}
                      />
                    </WhatsappShareButton>
                  </div>
                  <div className="wrapper-button">
                    <button
                      style={{ margin: 5 }}
                      className="button-primary"
                      onClick={restart}
                    >
                      Rejouer
                    </button>

                    <button
                      style={{ margin: 5 }}
                      className="button-primary"
                      onClick={() => displayResume()}
                    >
                      Résumé
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
