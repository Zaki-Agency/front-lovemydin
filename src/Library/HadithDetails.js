import React from "react";
import { useParams } from "react-router-dom";

const HadithDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Ici les détails du hadiths numéro : {id} inchallah</p>
    </div>
  );
};

export default HadithDetails;
