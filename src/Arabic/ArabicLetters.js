import React, { useState } from "react";
import "./ArabicLetters.css"

const ArabicLetters = () => {
  const [letters] = useState(["ا", "ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","ء"]);
  return (
    <div>
      <p>Apprendre les lettres en arabes</p>
      <div className="letters-wrapper">
      {letters.map((letter) => (
        <div className="letter-cards">
          <span>{letter}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ArabicLetters;
