import React, { Fragment } from "react";
import "./interested.scss";

const Interested = () => {
  return (
    <Fragment>
      <div className="interested_container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Interested in working with me?</h2>
              <p>
                I'm active on all social media platforms listed below, but you
                can also send me an email and I will get back to you within
                24-48 hours.
              </p>
              <button className="btn btn-warning">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Interested;
