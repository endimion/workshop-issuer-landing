import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row intro-row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <p>
                  {props.data ? props.data.wallet : "Loading"}
                  <a href={props.data ? props.data.android : ""}>android</a>
                  {" "}
                  <a href={props.data ? props.data.ios : ""}>ios</a>
                </p>
                <a
                  href={process.env.TICKET_ISSUER_URL?process.env.TICKET_ISSUER_URL:"https://dss.aegean.gr/workshop-issuer"}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Issue Your Tickets
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
