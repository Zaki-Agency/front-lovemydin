import React,{useState} from "react";
import Avatar from "avataaars";
function ProfilGeneral({profile}) {
const [setEmail] = useState(profile.user.email)
  return (
    <>
      <Avatar
        style={{
          height: 80,
          width: 80,
          backgroundColor: "white",
          borderRadius: 30,
          marginLeft: 10,
        }}
        s
        avatarStyle="Transparent"
        topType="ShortHairTheCaesar"
        accessoriesType="Blank"
        hatColor="Blue03"
        clotheType="BlazerShirt"
        eyeType="Default"
        eyebrowType="Default"
        mouthType="Default"
        skinColor="Light"
      />
      <form className="form-group">
        <div className="form-item">
          <div className="form-input active">
            <label htmlFor="profile-name">Pseudo</label>
            <input
              type="text"
              id="profile-name"
              name="profile_name"
              className="form-control"
              defaultValue={profile===undefined? "":profile.user.name}
            />
          </div>
        </div>

        <div className="form-item">
          <div className="form-input  active">
            <label htmlFor="profile-tagline">Prénom</label>
            <input
              type="text"
              id="profile-tagline"
              name="profile_tagline"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-item">
          <div className="form-input  active">
            <label htmlFor="profile-tagline">Nom</label>
            <input
              type="text"
              id="profile-tagline"
              name="profile_tagline"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-item">
          <div className="form-input  active">
            <label htmlFor="profile-tagline">Votre Age</label>
            <input
              type="number"
              id="profile-tagline"
              name="profile_tagline"
              className="form-control"
              defaultValue={profile===undefined? "":profile.age}
            />
          </div>
        </div>

        <div className="form-item">
          <div className="form-input  active">
            <label htmlFor="profile-public-email">Votre Email</label>
            <input
              type="text"
              id="profile-public-email"
              name="profile_public_email"
              className="form-control"
              defaultValue={profile===undefined? "":profile.user.email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-item">
          <div className="form-input small">
            <label htmlFor="profile-public-website">Site internet</label>
            <input
              type="text"
              id="profile-public-website"
              name="profile_public_website"
              className="form-control"
              defaultValue={profile===undefined? "":profile.website}
            />
          </div>
        </div>
      </form>
      <div className="row justify-content-center">
        <button className="btn btn-primary" type="">
          Sauvegarder
        </button>
      </div>
    </>
  );
}

export default ProfilGeneral;
