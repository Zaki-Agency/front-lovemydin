import React from "react";

export default function QuizzCarte({ title, description, numero, value, size ,sizefr, langage}) {


  const style = {
  fontSize:`${size}px` ,
};

const stylefr = {
fontSize:`${sizefr}px` ,
};


  return (


    <>
      <div className="card mef-card-categories" style={{ width: "60vw", height: "80vh",
   overflowY: 'scroll'}}>
        <div
          style={{ backgroundColor: "rgb(55, 172, 158)", color: "white" }}
          className="card-header text-center"
        >
          {value.toUpperCase().replace(/-/g," ")}

        </div>
        <div className="card-body mef-card-categorie">
          <div className="row">
            <div className="col-7  d-flex flex-row justify-content-end ">
              <h4 className="card-title "></h4>
            </div>
          {/*  <div className="col-5 d-flex flex-row justify-content-end ">
            <FaRegHeart />
            </div> */}
          </div>
          <h2 className="verset-arabe text-center">{numero !== 9 ? 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ' : null }</h2>
          {description.map((item, index) => (
            <div key={index}>

              <hr />

              <p  style={style} className= "verset-arabe">{item.text_arabe  }</p>
                <p  style={stylefr} className= "" >{langage ? item.text : null  }</p>


            </div>
          ))}
          <hr />
          <div className="row">
          
            {/*}<div className="col-3 col-sm-3 col-md-4 d-flex justify-content-end ">
              <FiShare2 />
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
}
