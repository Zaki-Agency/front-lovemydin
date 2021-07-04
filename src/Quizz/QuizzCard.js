import React from "react";
import { FiShare2 } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export default function QuizzCard(props) {
  return (
    <>
      <div className="card mef-card-categories" style={{ width: "21rem" }}>
        {/* <img className="card-img-top" src="" ></img> */}
        <div
          style={{ backgroundColor: "rgb(75, 119, 78" }}
          className="card-header"
        ></div>
        <div className="card-body mef-card-categorie">
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h4 className="card-title">{props.title}</h4>
            </div>
            <div className="col-3 col-sm-3 col-md-4 d-flex flex-row justify-content-end ">
              <FaRegHeart />
            </div>
          </div>
          <p className="card-text">{props.description}</p>
          <div className="row">
            <div className="col-9 col-sm-9 col-md-8 d-flex flex-row  ">
              <h6>Numéro : {props.numero}</h6>
            </div>
            <div className="col-3 col-sm-3 col-md-4 d-flex justify-content-end ">
              <FiShare2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
