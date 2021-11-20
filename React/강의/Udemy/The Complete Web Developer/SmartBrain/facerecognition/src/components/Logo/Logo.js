import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" style={{ width: "200px" }}>
        <div
          className="pa3"
          style={{
            height: "200px",
          }}
        >
          <img style={{ paddingTop: "30px" }} src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
