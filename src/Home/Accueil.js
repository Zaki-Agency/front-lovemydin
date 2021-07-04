import React from "react";
import { useHistory } from "react-router-dom";
import "./Accueil.css";
import logo from "./../img/Lovemydin.png";

function Accueil() {

  const history = useHistory();


  function onNavigateQuizzConfig() {
    history.push("/QuizzConfig");
  }

  return (
    <>
      <div className="home-element-wrapper  ">
        <div
          className="home-element animate__infinite"
          style={{
            height: 150,
            width: 250,
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
                <div className="home-element">
        <p> Apprenez l 'islam à travers plusieurs thématiques !</p>
        </div>
        <div style={{ marginBottom: 5 }} className="home-element">
          <button onClick={onNavigateQuizzConfig} className="btn-accueil">
            <p className="mef-p"> Entrainement</p>{" "}
          </button>{" "}
        </div>{" "}
      </div>
    </>
  );
}

export default Accueil;
