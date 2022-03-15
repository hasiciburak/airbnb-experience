import React from "react";
import katieImage from "../images/katie-zaferes.png";
import star from "../images/star.png";
function Card() {
  return (
    <div className="card">
      <img className="card--image" src={katieImage} alt="" />

      <div className="card--stats">
        <img src={star} className="card--star" alt="Alternative Star" />
        <span>5.0</span>
        <span className="gray">(6) ⁕ </span>
        <span className="gray">USA</span>
      </div>
      <p> Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
export default Card;
