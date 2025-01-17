import React from "react";
import "../css/Card.css";
import Image from "../asset/avatar.jpg";

function Card() {
  return (
    <div className="card_list">
      <div className="one_card">
        <div className="card">
          <img className="image" src={Image} alt="John" />
          <h1>John Doe</h1>
          <p>CEO & Founder, Example</p>
          <p>Harvard University</p>
        </div>
        <div className="back_card"></div>
      </div>
    </div>
  );
}

export default Card;
