import React, { Fragment } from "react";
import "./header.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="header_h1">
                Helping companies build <br /> better, scalable software
              </h1>
              <p className="header_para1">
                Award-winning web developer and author, with over 15+ years of
                working <br /> experience with Fortune 500 companies link Apple,
                Facebook, Google, and <br /> more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
