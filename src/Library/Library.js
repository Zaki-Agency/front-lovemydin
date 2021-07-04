import React from "react";
import { useHistory } from "react-router-dom";
import "./Library.css";

const Library = () => {
  const history = useHistory()
  return (
    <div className="Library-Wrapper">
      {/* <div
        onClick={() => history.push("/Search")}
        style={{
          width: 500,
          color: "rgb(99, 99, 115)",
          backgroundColor: "rgb(248, 248, 251)",
          boxShadow: "3px 3px 10px rgb(63, 177, 163)",
          height: 300,
          maxheight:400,
          marginTop: '20vh',
          opacity: 1,
        }}
        className="Library-element"
        >
          <h4>Coran</h4>
          <p>D'après 'Othman Ibn 'Affan (qu'Allah l'agrée), le Prophète (que la prière d'Allah et Son salut soient sur lui) a dit: « Le meilleur d’entre-vous est celui qui apprend le Coran et l’enseigne »</p>
   
      </div> */}

      <div
        className="card Library-element"
        onClick={() => history.push("/Hadith")}
        style={{
          width: 500,
          maxheight: 400,
          color: "rgb(99, 99, 115)",
          height: 300,
          marginTop: "20vh",
          opacity: 1,
        }}
      >
        <div >
          <h4>Hadith </h4>
          <p>
            Abou Darda (qu’Allah l’agrée) a dit: J’ai certes entendu le Prophète
            (que la prière d’Allah et son salut soient sur lui) dire: « Celui
            qui emprunte un chemin par lequel il recherche une science Allah lui
            fait prendre par cela un chemin vers le paradis...
          </p>
        </div>
      </div>
    </div>
    //
    //   <div
    //     onClick={() => history.push("/Citation")}
    //     style={{
    //       width: 200,
    //       color: "brown",
    //       fontSize: "20px",
    //       height: 200,
    //       fontFamily: "monospace",
    //       backgroundColor: "#85e0ce",
    //       borderStyle: "revert",
    //       marginTop: 30,
    //       opacity: 0.9,
    //     }}
    //     className="col-3 d-flex justify-content-center align-items-center"
    //   >
    //
    //     <div className="col-12 justify-content-center text-center ">
    //       <p>Citations</p>
    //       <p>Bientot disponible</p>
    //     </div>
    //   </div>
    // </div>

    //   <div className="row d-flex  justify-content-around ">
    //     <div
    //       onClick={() => history.push("/Search")}
    //       style={{
    //         width: 200,
    //         color: "#36ab9d",
    //         height: 200,
    //         backgroundColor: "brown",
    //         marginTop: 30,
    //         opacity: 0.7,
    //       }}
    //       className="col-3 d-flex justify-content-center align-items-center"
    //     >
    //       Invocation
    //     </div>
    //
    //     <div
    //       onClick={() => history.push("/Prophete")}
    //       style={{
    //         width: 200,
    //         color: "#36ab9d",
    //         height: 200,
    //         backgroundColor: "yellowgreen",
    //         marginTop: 30,
    //         opacity: 0.7,
    //       }}
    //       className="col-3 d-flex justify-content-center align-items-center"
    //     >
    //       Les prophètes
    //     </div>
    //     <div
    //       style={{
    //         width: 200,
    //         color: "#36ab9d",
    //         height: 200,
    //         backgroundColor: "green",
    //         marginTop: 30,
    //         opacity: 0.7,
    //       }}
    //       className="col-3 d-flex justify-content-center align-items-center"
    //     >
    //       Les compagnons
    //     </div>
    // </div>
    //
    // </div>
  );
};

export default Library;
