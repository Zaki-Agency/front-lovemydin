import React from "react";

function ProfilContact() {
  return (
    <>
      <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
        <form
          className="shake"
          role="form"
          method="post"
          id="contactForm"
          name="contact-form"
          data-toggle="validator"
        >
          <h1 className="section-title">Nous contacter</h1>
          <div className="form-group label-floating">
            <label className="control-label" htmlFor="name">
              Votre nom
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              required
              data-error="Please enter your name"
            />

            <div className="form-group label-floating">
              <label className="control-label" htmlFor="email">
                Votre email
              </label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                required
                data-error="Please enter your Email"
              />

              <div className="form-group label-floating">
                <label className="control-label">Sujet</label>
                <input
                  className="form-control"
                  id="msg_subject"
                  type="text"
                  name="subject"
                  required
                  data-error="Please enter your message subject"
                />
              </div>
              <div className="form-group label-floating">
                <label htmlFor="message" className="control-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  id="message"
                  name="message"
                  required
                  data-error="Write your message"
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-submit mt-5">
                <button
                  className="button-primary"
                  type="submit"
                  id="form-submit"
                >
                  <i className="material-icons mdi mdi-message-outline"></i>
                  Envoyer
                </button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfilContact;
