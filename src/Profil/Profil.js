import React, { useState, useEffect } from "react";
import "./Profil.css";
// import ProfilSidebar from "./Profil_Sidebar";
import ProfilReglement from "./Profil_reglement";
import ProfilGeneral from "./Profil_general";
import ProfilCompte from "./Profil_compte";
import ProfilContact from "./Profil_contact";
import axios from "axios";
import history from "../Navigation/History";

export default function Profil() {
  const [profile, setProfile] = useState();
  const [liste, setListe] = useState([
    {
      information: false,
      compte: false,
      reglement: false,
      contacter: false,
    },
  ]);

  useEffect(() => {
    const ProfilApi = `${process.env.REACT_APP_API}/profile/me`;
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .get(ProfilApi)
      .then((res) => {
        console.log(res.data);
        if(res.data =! undefined)
        {setProfile(res.data)};
      })
      .catch((error) => {
        console.log(error);
        alert("aucun profil")
      });
  }, []);

  function onNavigateProfile() {
    history.push("/SocialProfile");
  }

  const Navigation = (e) => {
    console.log(profile);

    const list2 = [...liste];
    if (e.target.id === "information" && profile ===! undefined) {
      list2[0].information = true;
      list2[0].compte = false;
      list2[0].reglement = false;
      list2[0].contacter = false;
    } else if (e.target.id === "compte") {
      list2[0].information = false;
      list2[0].compte = true;
      list2[0].reglement = false;
      list2[0].contacter = false;
    } else if (e.target.id === "reglement") {
      list2[0].information = false;
      list2[0].compte = false;
      list2[0].reglement = true;
      list2[0].contacter = false;
    } else if (e.target.id === "contacter") {
      list2[0].information = false;
      list2[0].compte = false;
      list2[0].reglement = false;
      list2[0].contacter = true;
    } else return null;
    setListe(list2);

   
  };

  return (
    <>
      <div className="container container-profil">
        <p>Profil en cours de construction ...</p>

        <div className="row">
          <div className="col-md-4 col-sm-12 d-flex ">
            <div className="p-sidebar">
              <button onClick={()=> onNavigateProfile()}>Creer son profil</button>
              <p>Mon profil</p>

              <div
                className="list-group list-group-mine"
                id="list-tab"
                role="tablist"
              >
                <a
                  className="list-group-item list-group-item-action mef-profil-item"
                  onClick={(e) => Navigation(e)}
                  id="information"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  Informations général
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  onClick={(e) => Navigation(e)}
                  id="compte"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Paramètre du compte
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  onClick={(e) => Navigation(e)}
                  id="reglement"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Réglement et conditions
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  onClick={(e) => Navigation(e)}
                  id="contacter"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 20 }} className="col-md-8 col-sm-12  ">
            {liste[0].information ? <ProfilGeneral profile={profile} /> : null}
            {liste[0].compte ? <ProfilCompte profile={profile} /> : null}
            {liste[0].reglement ? <ProfilReglement /> : null}
            {liste[0].contacter ? <ProfilContact /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
