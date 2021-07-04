import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Quizz.css";
import QuizzAnswer from "./QuizzAnswer";
import QuizzQuestion from "./QuizzQuestion";
import QuizzFinish from "./QuizzFinish";
import QuizzScore from "./QuizzScore";
import { ProgressBar } from "./QuizzTimer";
import QuizzNext from "./QuizzNext";
import QuizzHeart from "./QuizzHeart";
import QuizzExplanation from "./QuizzExplanation";
import sucess from "../sound/success.mp3";
import wrong from "../sound/wrong.mp3";
import axios from "axios";

export default function Quizz({ name, quizzs }) {
  const handle = useParams();
  const QuizzApi = `${process.env.REACT_APP_API}/quizz/${handle.id}`;
  const [Data, setData] = useState(quizzs);
  const [loading, setLoading] = useState(true);
  const [Score, setScore] = useState(0);
  const [Index, setIndex] = useState(0);
  const [Name] = useState(name === undefined ? "invité" : name);
  const [QuizzFinished, setQuizzFinished] = useState(false);
  const [HeartBroke, setHeartBroke] = useState([]);
  const [Explanation, setExplanation] = useState(false);
  const [Percentage, setPercentage] = useState(0);
  const [Heart, setHeart] = useState([1, 1, 1]);
  const [correct, setCorrect] = useState([]);
  const [Couleur, setCouleur] = useState([
    { backgroundColor: "rgb(236, 236, 244)", color: "" },
    { backgroundColor: "rgb(236, 236, 244)", color: "" },
    { backgroundColor: "rgb(236, 236, 244)", color: "" },
    { backgroundColor: "rgb(236, 236, 244)", color: "" },
  ]);
  const [Answer, setAnswer] = useState(true);
  const [show, setShow] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const audio1 = new Audio(sucess);
  const audio2 = new Audio(wrong);

  let id1 = null;

  useEffect(async () => {
    console.log("fetech data");
    if (handle.id !== undefined) {
      await axios
        .get(QuizzApi)
        .then((res) => {
          setData(res.data[0].question);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {};
  }, []);

  const compteur = () => {
    id1 = setInterval(function () {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
  };

  useEffect(() => {
    compteur();
    const id2 = setTimeout(function () {
      setLoading(false);
      clearInterval(id1);
    }, 3000);

    return () => {
      clearTimeout(id2);
    };
  }, []);

  const percentageUpdate = () => {
    if (Index < Data.length - 1) {
      setIndex(Index + 1);
      setPercentage(Percentage * 0);
    } else {
      setIndex(Index * 0);
      setQuizzFinished(true);
    }
  };

  const percentageIncrease = () => {
    setPercentage(Percentage + 1);
  };

  const playSound = (Answer) => {
    if (Answer) {
      console.log(audio1);
      console.log("jeu");
      audio1.play();
    } else {
      audio2.play();
    }
  };

  const boxClick = (quizz, idx, proposition) => {
    console.log(proposition);
    // console.log(correct);
    if (Index <= Data.length - 1 && Heart.length >= 1) {
      if (quizz.correct === true && Explanation === false) {
        playSound(quizz.correct);
        let colors = [...Couleur];

        colors[idx] = {
          backgroundColor: "rgb(2, 191, 99)",
          color: "white",
        };

        let copycorrect = [...correct];
        copycorrect.push(1);
        setCorrect(copycorrect);
        setScore(Score + 5);
        setExplanation(true);
        setPercentage(Percentage * 0);
        setShow(true);
        setAnswer(true);
        setCouleur(colors);
      } else if (quizz.correct === false && Explanation === false) {
        playSound(quizz.correct);
        let array = [...Heart];
        let array2 = [...HeartBroke];
        array2.push("brokeheart");

        array.splice(0, 1);

        let copycorrect = [...correct];
        copycorrect.push(0);
        setCorrect(copycorrect);
        let colors = [...Couleur];
        colors[idx] = {
          backgroundColor: "rgb(237, 92, 73)",
          color: "white",
        };
        let element = proposition
          .map((reponse) => reponse.correct)
          .indexOf(true);

        colors[element] = {
          backgroundColor: "rgb(2, 191, 99)",
          color: "white",
        };

        setPercentage(Percentage * 0);
        setHeart(array);
        setHeartBroke(array2);
        setExplanation(true);
        setAnswer(false);
        setCouleur(colors);
      }
    } else if (Heart.length === 1) {
      // QuizzFinished: true,
      setScore(Score + 5);
    }
    return quizz;
  };

  const boxNext = () => {
    let newArray = Couleur.filter(function (el) {
      return el.color == "";
    });
    console.log(newArray.length);

    if (Index < Data.length - 1 && Heart.length > 0) {
      if (newArray.length === 4) {
        let copycorrect = [...correct];
        copycorrect.push(2);
        setCorrect(copycorrect);
      }

      let colors = [...Couleur];
      colors = [
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
      ];

      setIndex((Index) => Index + 1);
      setPercentage(Percentage * 0);
      setExplanation(false);
      setCouleur(colors);
    } else if (Index === Data.length - 1 || Heart.length === 0) {
      if (newArray.length === 4) {
        let copycorrect = [...correct];
        copycorrect.push(2);
        setCorrect(copycorrect);
      }
      setIndex(Index * 0);
      setQuizzFinished(true);
      setPercentage(Percentage * 0);
      setExplanation(false);
      console.log(Index);
    }
  };

  const boxRestart = () => {
    if (QuizzFinished) {
      let colors = [...Couleur];
      colors = [
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
        { backgroundColor: "rgb(236, 236, 244)", color: "" },
      ];

      setIndex(0);
      setIndex(Percentage * 0);
      setQuizzFinished(false);
      setScore(Score * 0);
      setHeart([0, 1, 2]);
      setHeartBroke([]);
      setCouleur(colors);
      setCorrect([]);
    }
  };

  return (
    <>
      {!loading ? (
        <>
          {QuizzFinished ? (
            <>
              <QuizzFinish
                heart={Heart.length}
                length={Data.length}
                question={Data}
                restart={boxRestart}
                correct={correct}
                score={Score}
                percentage={Percentage}
                name={Name}
              />
            </>
          ) : (
            <>
              <div className="row ">
                <div className=" col-4  d-flex justify-content-center">
                  <QuizzHeart heart={Heart} heartbroke={HeartBroke} />
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <ProgressBar
                    data={Data.length}
                    index={Index}
                    percentage={Percentage}
                    percentageUpdate={percentageUpdate}
                    percentageIncrease={percentageIncrease}
                    Explanation={Explanation}
                  />
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <QuizzScore score={Score} />
                </div>
              </div>
              <div className="row flex-column justify-content-center align-items-center">
                <QuizzQuestion
                  index={Index}
                  length={Data.length}
                  question={Data[Index].title}
                  difficulty={Data[Index].difficulty}
                  categorie={Data[Index].categorie}
                />
                <QuizzNext
                  boxNext={boxNext}
                  Quizzdata={Data}
                  index={Index}
                  onKeyDown={(e) => console.log(e)}
                  heart={Heart}
                />
                {/* <QuizzReport />
                 */}
              </div>
              <div className="row justify-content-center ">
                <QuizzAnswer
                  data={Data[Index].propositions}
                  clic={boxClick}
                  couleur={Couleur}
                  index={Index}
                ></QuizzAnswer>
              </div>

              {Explanation ? (
                <>
                  <QuizzExplanation explanation={Data[Index].explanation} />

                  {/* <QuizzInputComments />

              <QuizzCommentaires /> */}
                </>
              ) : null}
            </>
          )}
        </>
      ) : (
        <div className="counter-wrapper">
          <p>
            <b>Commencement dans :</b>
          </p>
          <div>
            <span>{seconds}</span>
          </div>
        </div>
      )}
    </>
  );
}
