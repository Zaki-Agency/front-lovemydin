import React, { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function QuizzCheck({ answer }) {
  const [couleur, setCouleur] = useState("");
  const Couleurs = () => {
    if (answer === true) {
      setCouleur("green");
    } else {
      setCouleur("red");
    }
    return couleur;
  };
  useEffect(() => {
    Couleurs(answer);
    return () => {};
  }, [answer]);


  return (
    <>
      <div className="row justify-content-center">
        <IconContext.Provider
          value={{
            color: couleur,
            className: "mef-icon",
            position: "abolute",
            size: 80,
          }}
        >
          {answer ? <FiCheck /> : <FiX />}
        </IconContext.Provider>
      </div>
    </>
  );
}
