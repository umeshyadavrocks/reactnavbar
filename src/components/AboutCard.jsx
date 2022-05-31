import React from "react";
function AboutCard(props) {
  return (
    <div className="about-card col col-md-6 col-sm-12">
      {/* <img src={logo} alt="" /> */}
      <div className="about-text">
        <h3>{props.heading}</h3>
        <p>{props.data}</p>
      </div>
    </div>
  );
}

export default AboutCard;
