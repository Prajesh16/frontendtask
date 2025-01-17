import React from "react";
import "../css/Header.css";

function header() {
  return (
    <div className="title">
      <h1 className="title_name">
        Built for Passion Built to Sustain Spreadd is committed to YOUR success!
      </h1>
      <p className="title_desc">
        Discover the tools and strategies you need to achieve sustainable
        success. Unlock your full potential.
      </p>
      <div className="button">
        <button className="btn selected">Monetization Options</button>
        <button className="btn">Collaborate with Trusted Brands</button>
        <button className="btn">Grow Your Audience</button>
        <button className="btn">Flourish in a Supportive Community</button>
      </div>
    </div>
  );
}

export default header;
