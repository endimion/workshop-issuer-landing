import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
          <div className="col-lg-12">
              <div className="features-grid">
                  {props.data
                      ? props.data.map((d, i) => (
                          <div key={`${d.title}-${i}`} className="feature-box" >
                              {" "}
                              <i className={d.icon}></i>
                              <h3>{d.title}</h3>
                              <p>{d.text}</p>
                          </div>
                      ))
                      : "Loading..."}
              </div>
          </div>
      </div>
    </div>
  );
};
