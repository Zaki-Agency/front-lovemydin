import React from "react";

function ProfilSidebar() {
  return (
    <div className="p-sidebar">
      <p>Mon profil</p>

      <div className="list-group list-group-mine" id="list-tab" role="tablist">
        <a
          className="list-group-item list-group-item-action mef-profil-item"
          id="list-home-list"
          data-toggle="list"
          href="#list-home"
          role="tab"
          aria-controls="home"
        >
          Informations général
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-profile-list"
          data-toggle="list"
          href="#list-profile"
          role="tab"
          aria-controls="profile"
        >
          Paramètre du compte
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-messages-list"
          data-toggle="list"
          href="#list-messages"
          role="tab"
          aria-controls="messages"
        >
          Réglement et conditions
        </a>
        <a
          className="list-group-item list-group-item-action"
          id="list-settings-list"
          data-toggle="list"
          href="#list-settings"
          role="tab"
          aria-controls="settings"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
}

export default ProfilSidebar;
