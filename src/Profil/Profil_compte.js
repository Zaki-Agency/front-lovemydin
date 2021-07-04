import React from "react";

function ProfilCompte() {
  return (
    <div>

      <form className="form-group">
      <p style={{textAlign: "center", fontSize:"25px", color : "#36ab9d" }}>Changer mon mot de passe :</p>
        <div className="form-item">
          <div className="form-input active">
            <label htmlFor="profile-name">Nouveau mot de passe</label>
            <input
              type="text"
              id="profile-name"
              name="profile_name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-item">
          <div className="form-input active">
            <label htmlFor="profile-name">Répéter le nouveau mot de passe</label>
            <input
              type="text"
              id="profile-name"
              name="profile_name"

              className="form-control"
            />
          </div>
        </div>
        <div className="form-item">
          <div className="form-input ">
            <label htmlFor="account">Désactiver mon compte :</label>
            <input
              style={{display : "inline-block"}}
              type="checkbox"
              id="profile-name"
              name="profile_name"
              className="form-control"
            />
          </div>
        </div>
        <button style={{width :"150px", margin : "auto"}} className="button-primary ">Valider</button>
      </form>
    </div>
  );
}

export default ProfilCompte;
