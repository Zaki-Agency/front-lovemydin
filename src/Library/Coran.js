import React, { useState } from "react";
import { IconContext } from "react-icons";
import QuizzCarte from "../Quizz/QuizzCarte";
import { Pagination } from "../Home/Pagination";
import { Form } from "react-bootstrap";
import "./Coran.css";

export default function Coran({ value, data, handleValue }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [versePerPage] = useState(5);
  const [sizefr, setSizefr]= useState(25);
  const [size, setSize]= useState(25);
  const [traduction, settraduction] = useState(false);

  //get current page

  const indexOfLastPost = currentPage * versePerPage;
  const indexOfFirstPost = indexOfLastPost - versePerPage;
  // const currentVerse = data.slice(indexOfFirstPost, indexOfLastPost);

  // change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };






  // console.log(data[99].versets.length);
  return (
    <>
    <div className="row">
      <div className="col-2 justify-content-end">
        <div className="sidebar-coran">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="row liste-coran-item">
                <div className="col-3  text-center">
                  <p
                    style={{
                      backgroundColor: "rgb(55, 172, 158)",
                      borderRadius: 70,
                      color: "white",
                    }}
                    >
                    {idx + 1}
                  </p>
                </div>
                <div key={idx} className="col-9 justify-content-center ">
                  <p onClick={(e) => handleValue(item.nom_phonetique)}>
                    {item.nom_phonetique}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-8">
        <div

          className="row d-flex justify-content-center "
          >
          <IconContext.Provider
            value={{ color: "#484848", className: "", size: 20 }}
            >
            {value.length > 0 &&
              data
              .filter((item) =>
              item.nom_phonetique.toLowerCase().includes(value)
            )
            .map((item) => {
              return (
                <div key={item.position}>
                  <QuizzCarte
                    title={item.nom_phonetique}
                    langage={traduction}
                    size={size}
                    sizefr={sizefr}
                    value={value}
                    description={item.versets.slice(
                      indexOfFirstPost,
                      indexOfLastPost
                    )}
                    numero={item.position}
                    />
                  <div className="row  justify-content-center">
                    <div className="col-10 justify-content-center">
                      <Pagination
                        versePerPage={versePerPage}
                        totalVerse={item.versets.length}
                        paginate={paginate}
                        />
                    </div>
                  </div>
                </div>
              );
            })}
          </IconContext.Provider>
        </div>
      </div>
      <div className="col-2 justify-content-center text-center">
        <div className="sidebar-coran-audio">
          <div class="custom-control custom-switch">
            <input  onChange={()=> settraduction(!traduction)} type="checkbox" className="custom-control-input" id="customSwitch1"/>
            <label style={{color: 'white', marginTop : '25px', marginBottom : '10px'}} className="custom-control-label" for="customSwitch1">Traduction</label>
          </div>


          <p  style={{color : "white"}}> Réglage lecture </p>

          <Form.Group controlId="formNasicRange">
            <Form.Label>
              <p style={{color :"white"}}>Taille Verset : {size}</p>
            </Form.Label>
            <div className="justify-content-center ml-2 mr-2" >
              <Form.Control
                onChange={(e) => setSize(e.target.value)}
                type="range"
                min="15"
                max="100"
                step="1"
                value={size}

                custom
                />
            </div>
            <Form.Label>
              <p style={{color :"white"}}>Type de police </p>
            </Form.Label>

          </Form.Group>

          {traduction ?
            <Form.Group controlId="formNasicRange">

              <Form.Label>
                <p style={{color :"white"}}>Taille Traduction : {sizefr}</p>
              </Form.Label>
              <div className="justify-content-center ml-2 mr-2" >
                <Form.Control
                  onChange={(e) => setSizefr(e.target.value)}
                  type="range"
                  min="15"
                  max="100"
                  step="1"
                  value={sizefr}

                  custom
                  />
              </div>
              <Form.Label>

                <p style={{color :"white"}}>Type de police </p>
              </Form.Label>



            </Form.Group>
            : null  }

          </div>
        </div>
      </div>
      </>
  );
}
