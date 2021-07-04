import React, { useState} from "react";
import CitationElement from "./CitationElement";
import { Quotes } from "../services/fakeQuotes";


function Citation() {

  const [value, setValue] = useState("");

  return (
    <>
      <div className="row d-flex justify-content-center">
        <input
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "370px", marginTop: 25 }}
          placeholder="Chercher une citation ..."
        ></input>
        <button
          style={{
            marginTop: 25,
            marginLeft: 20,
            color: "white",
            backgroundColor: "rgb(99, 99, 115)",
            padding: 10,
          }}
        >
          Rechercher
        </button>
      </div>
      {Quotes.filter((item) =>
        item.Quotes_details.description.toLowerCase().includes(value)
      ).map((item, idx) => (
        <CitationElement
        key={idx}
          description={item.Quotes_details.description}
          auteur={item.Quotes_details.auteur}
        />
      ))}
    </>
  );
}

export default Citation;
