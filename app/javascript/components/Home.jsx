import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Boggle Game</h1>
        <p className="lead">
          A simple boggle game created in ROR with react.Click on "Play Now" and have fun.
        </p>
        <hr className="my-4" />
        <Link
          to="/index"
          className="btn btn-lg custom-button"
          role="button"
        >
          Play Now
        </Link>
      </div>
    </div>
  </div>
);