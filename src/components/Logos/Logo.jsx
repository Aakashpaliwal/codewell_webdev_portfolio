import React, { Fragment } from "react";
import "./logo.scss";
import walmartLogo from "../../Assets/Logos/Walmart.svg";
import jpMorganLogo from "../../Assets/Logos/JPMorgan.svg";
import samsungLogo from "../../Assets/Logos/Samsung.svg";
import tinderLogo from "../../Assets/Logos/Tinder.svg";
import visaLogo from "../../Assets/Logos/Visa.svg";
import verizonLogo from "../../Assets/Logos/Verizon.svg";

const Logo = () => {
  return (
    <Fragment>
      <div className="logo_container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo_content">
                <img
                  src={walmartLogo}
                  alt="Walmart Logo"
                  className="img-fluid"
                />
                <img
                  src={jpMorganLogo}
                  alt="JPMorgan Logo"
                  className="img-fluid"
                />
                <img src={visaLogo} alt="Visa Logo" className="img-fluid" />
                <img src={tinderLogo} alt="Tinder Logo" className="img-fluid" />
                <img
                  src={samsungLogo}
                  alt="Samsung Logo"
                  className="img-fluid"
                />
                <img
                  src={verizonLogo}
                  alt="Verizon Logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Logo;
