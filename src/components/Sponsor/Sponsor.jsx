import React, { Fragment } from "react";
import "./sponsor.scss";
import spenseImg from "../../Assets/Spense.png";
import yelpImg from "../../Assets/YelpCamp.png";

const Sponsor = () => {
  return (
    <Fragment>
      <section className="sponsor">
        <div className="container">
          <div className="row">
            <div className="col-md-6 sponsor_content">
              <img src={spenseImg} alt="spense" className="img-fluid" />
              <h2>Spence.com</h2>
              <p>
                Rethinking the way writers get paid, an open source platform
                designed to help writers focus more on writing, and less on when
                and how they'll get paid. Project in collaboration with code
                well etc.
              </p>
            </div>
            <div className="col-md-6 sponsor_content">
              <img src={yelpImg} alt="yelpCamp" className="img-fluid" />
              <h2>YelpCamp.com</h2>
              <p>
                Allowing backpack travelers to find the perfect their trip
                through an open source platform similiar to TripAdvisor. With
                over 1m MAU, YelpCamp has been the crowd's favorite in 2021.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Sponsor;
