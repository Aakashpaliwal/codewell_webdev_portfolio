import React, { Fragment } from "react";
import "./footer.scss";
import githubImg from "../../Assets/Social_Icons/Github.svg";
import linkedInImg from "../../Assets/Social_Icons/LinkedIn.svg";
import twitterImg from "../../Assets/Social_Icons/Twitter.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 name_container">
              <p>Jonathan Specter</p>
            </div>
            <div className="col-6 social_media_container">
              <img src={githubImg} alt="github" className="github_icon" />
              <img src={linkedInImg} alt="linkedIn" className="linkedIn_icon" />
              <img src={twitterImg} alt="twitter" className="twitter_icon" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
