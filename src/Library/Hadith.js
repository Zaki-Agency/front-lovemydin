import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form,  Button, Modal } from "react-bootstrap";
import {Link} from "react-router-dom"
import {
  EmailIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  EmailShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon
} from "react-share";
import { FaCopy } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./hadith.css";

const Hadith = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [chapitre] = useState([
    "Introduction",
    "La Foi",
    "Purification",
    "Menstruations",
    "Prière",
    "Mosquées et endroits de prière",
    "Prière du voyageur et son abbréviation",
    "Vendredi",
    "Prières deux fetes",
    "Prière pour la sollicitation de la pluie",
    "Eclipses",
    "Funérailles",
    "Aumone légale",
    "Jeune",
    "Retraite spirituelle",
    "Pélerinage",
    "Mariage",
    "Allaitement",
    "Divorce",
    "Anathène",
    "Affranchissement",
    "Ventes",
    "Irrigation",
    "Successions",
    "Donations",
    "Testaments",
    "Voeux",
    "Serments",
    "Serments collectifs , belligérants [...]",
    "Peines légales",
    "Sentences",
    "Objets trouvés",
    "Jihad et Expeditions",
    "Commandement",
    "Chasse, animaux à égorger et ce [...]",
    "Sacrifices",
    "Boissons",
    "Vetements et parures",
    "Education",
    "Salut",
    "Bonnes paroles",
    "Poésie",
    "Reves",
    "Mérites",
    "Mérites des compagnons",
    "Bonté, la générosité, et les bonnes moeurs",
    "Destin",
    "Science",
    "Invocation, évocations, repentir",
    "Les tentations du coeurs",
    "Le repentir",
    "Caractéristiques des hypocrites et leur status",
    "Aspects du Joour de la resurrection, [...]",
    "Paradis, ses délices et de ses habitants",
    "Tentations et indices du jour dernier",
    "Ascétisme et indigent",
    "Exégèse",
  ]);

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [hadith, sethadith] = useState({
    french_version: "",
    arab_version: "",
    narrator: "",
    source: "",
    chapter_french: "",
    number: null,
  });

  // const handleComment = (e) => {
  //   Setcomment(e.target.value);
  // };

  const gotoTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  useEffect(() => {

    axios
      .get(`${process.env.REACT_APP_API}/api/hadith`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setShow(false);
    sethadith("");
  }, []);
  const sendHadith = () => {
    axios
      .post(`${process.env.REACT_APP_API}/api/hadith`, hadith)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2>Sahih Muslim</h2>
      </div>
      <div className="search-hadith">
        <input
          className="input-hadith"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Le hadith recherché"
        />
      </div>
      <div className="add-hadith" onClick={() => setShow(true)}>
        <Button variant="secondary ml-2 " onClick={() => gotoTop()}>
          Proposer un hadith
        </Button>
      </div>
      {show ? (
        <div>
          <Modal.Dialog show={show.toString()}>
            <Modal.Header onClick={handleClose} closeButton="closeButton">
              <Modal.Title>Ajouter un nouveau hadith</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group controlId="formGroupHadithFr">
                  <Form.Label>Hadith en francais</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      sethadith({
                        ...hadith,
                        french_version: e.target.value,
                      })
                    }
                    as="textarea"
                    rows={5}
                    placeholder="Ecrire un hadith ..."
                  />
                </Form.Group>
                <Form.Group controlId="formGroupHadithFr">
                  <Form.Label>Hadith en arabe</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      sethadith({
                        ...hadith,
                        arab_version: e.target.value,
                      })
                    }
                    as="textarea"
                    rows={5}
                    placeholder="Ecrire un hadith ..."
                  />
                </Form.Group>

                <Form.Group controlId="formGroupChapitre">
                  <Form.Label>Chapitre</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      sethadith({
                        ...hadith,
                        chapter_french: e.target.value,
                      })
                    }
                    as="select"
                    defaultValue="Choisir..."
                  >
                    {chapitre.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Numéro</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      sethadith({
                        ...hadith,
                        number: e.target.value,
                      })
                    }
                    type="number"
                    placeholder="Numero du hadith"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              <button className="button-step" variant="primary" onClick={handleClose}>
                Fermer
              </button>
              <button className="button-primary " variant="primary" onClick={sendHadith}>
                Valider
              </button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : null}{" "}
      <div className="row d-flex justify-content-center">
        {" "}
        <div className="col-12  d-flex align-items-center text-center flex-column">
          {data
            .filter((item) => item.french_version.toLowerCase().includes(value))
            .map((item, idx) => (
              <div
                className="card-block-hadith"
                key={idx}
                style={{
                  marginTop: 50,
                }}
              >
                <p className="title-hadith">Chapitre : {item.chapter_french}</p>
                <p>{item.french_version}</p>
                <p>{item.arab_version}</p>
                <div className="row">
                  <div className="col-6">
                    <p>Livre : {item.source}</p>
                  </div>

                  <div className="col-6">
                    <p>Numéro hadith : {item.number}</p>
                  </div>
                  <div className="col-12">
                    <Link to={`/hadith/${item.number}`}>
                    <button className="button-primary">Détails</button>
                    </Link>
                  </div>
                  <div>
                    <div style={{ marginLeft: 10, marginBottom: 10 }}>
                      <span>Partager :</span>
                    </div>
                    <div className="social-share">
                      <FacebookShareButton
                        url="lovemydin.com"
                        quote={item.french_version}
                      >
                        <FacebookIcon
                          size={30}
                          iconFillColor="white"
                          round={true}
                        />
                      </FacebookShareButton>
                      <TwitterShareButton
                        title={item.french_version}
                        separator=" "
                        url="lovemydin.com"
                      >
                        <TwitterIcon
                          size={30}
                          iconFillColor="white"
                          round={true}
                        />
                      </TwitterShareButton>
                      <WhatsappShareButton
                        url="lovemydin.com"
                        separator=" "
                        title={item.french_version}
                      >
                        <WhatsappIcon
                          size={30}
                          iconFillColor="white"
                          round={true}
                        />
                      </WhatsappShareButton>
                      <EmailShareButton
                        subject="Partage d'un Hadith"
                        body="test"
                        separator=" "
                        url="lovemydin.com"
                      >
                        <EmailIcon
                          size={30}
                          iconFillColor="white"
                          round={true}
                        />
                      </EmailShareButton>
                      <IconContext.Provider
                        value={{
                          size: 25,
                        }}
                      >
                        <FaCopy
                          onClick={() => {
                            navigator.clipboard.writeText(item.french_version);
                          }}
                        />
                      </IconContext.Provider>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Hadith;
