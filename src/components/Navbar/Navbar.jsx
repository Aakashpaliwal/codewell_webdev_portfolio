import React, { Fragment } from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Jonathan Specter
          </a>

          <div
            class="collapse navbar-collapse li_color"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Article
                  {/* <span class="sr-only">(current)</span> */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Chats
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Awards
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-warning my-2 my-sm-0" type="submit">
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
