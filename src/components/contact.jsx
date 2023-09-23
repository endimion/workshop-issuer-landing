import React from "react";

const contactItemStyle = {
  margin: "0 20px",
  alignItems: "center",
};

// const imageContainerStyle = {
//   display: "flex",
//   flexDirection: "row", // Display images and text in a row
//   alignItems: "center", // Center items vertically
//   textAlign: "center", // Center text horizontally
//   marginTop: "20px", // Add some top margin for spacing
// };

const imageStyle1 = {
  maxWidth: "15em", // Ensure images don't exceed container width
};
const imageStyle2 = {
  maxWidth: "10em", // Ensure images don't exceed container width
};
const imageStyle3 = {
  maxWidth: "10em", // Ensure images don't exceed container width
};

const logosContainerStyle = {
  display: "flex",
  justifyContent: "center", // Center images horizontally
  alignItems: "center", // Center images vertically
  marginTop: "40px", // Add some top margin for spacing
};

const creditsContainerStyle = {
  marginTop: "40px", // Add some top margin for spacing
  textAlign: "center", // Center text horizontally
};

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="contact-info-container" style={{}}>
          <div className="container" style={{ }}>
            <h2 className="section-title">Contact Info</h2>
            <div className="col-md-12 contact-info">
              <div className="contact-item" style={contactItemStyle}>
                <span>
                  <i className="fa fa-map-marker"></i> <strong> Address</strong>
                </span>
                <div> {props.data ? props.data.address : "loading"} </div>
              </div>
              <div className="contact-item" style={contactItemStyle}>
                <p>
                <span>
                  <i className="fa fa-phone"></i> <strong> Phone </strong>
                </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item" style={contactItemStyle}>
                <p>
                <span>
                  <i className="fa fa-envelope-o"></i> <strong> Email </strong>
                </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* New Row for Images and Text */}
        <div className="row" style={logosContainerStyle}>
          <div className="col-md-4 text-center">
            {/* Image 1 */}
            <div style={contactItemStyle}>
              <img src="img/cef_logo.webp" alt="Image 1" style={imageStyle1} />
            </div>
          </div>
          <div className="col-md-4 text-center">
            {/* Image 2 */}
            <div style={contactItemStyle}>
              <img src="img/ewc_logo.png" alt="Image 2" style={imageStyle2} />
            </div>
          </div>
          <div className="col-md-4 text-center">
            {/* Image 3 */}
            <div style={contactItemStyle}>
              <img
                src="img/EBSI logo_EB_negative.png"
                alt="Image 3"
                style={imageStyle3}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "10px" }}>
            <div style={creditsContainerStyle}>
              The EWC project is co-funded by the EU’s Digital Europe Programme
              under Grant Agreement – GAP-101102744
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Developed by{" "}
            <a
              href="https://www.linkedin.com/company/uaegean-i4m-lab/people/"
              rel="nofollow"
            >
              UAegean i4m Lab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
