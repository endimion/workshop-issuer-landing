import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img src="./img/erua_logo_ppl.png" className="img-responsive" alt="" />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>About Us</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>Why Choose Us?</h3>
            <div className="list-style">
              <div className="col-xs-6 col-sm-6 col-md-6">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6">
                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
