import React, { Fragment } from "react";
import "./communities.scss";

const Communities = () => {
  return (
    <Fragment>
      <div className="communities_container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mobile_header">
              <h2>A co-founder at one of the larget communities.</h2>
            </div>
            <div className="col-6">
              <h2 className="non_mobile_header">
                A co-founder at one of the larget communities.
              </h2>
              <p>
                The combined experience I have working at the top fortune 500
                companies has allowed me to developer skillset that helps me in
                not just development, but in every aspect of any business.
              </p>
              <p className="mt-4">
                I'm proud to announce that I am now working at one of the
                world's largest communities teaching young minds how to code and
                sell yourself as developer and open them a whole new world of
                possibilities.
              </p>
            </div>
            <div className="col-6">
              <p>
                As a developer, you have everything available to you and all
                that's holding you back is yourself
              </p>
              <p className="mt-4">
                A quote I live by perfectly illustrates what I mean
              </p>
              <p className="mt-4">
                "How big would you dream, if you knew you wouldn't fail?"
                <br /> You already gone throught hardet part of being a
                developer, it's time to elevate your skill and become leader in
                something you're passionate about.
              </p>
              <p className="mt-4">
                I'm happy to chat over coffee some time about how can I help
                your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Communities;
