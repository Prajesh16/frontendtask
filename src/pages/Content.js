import React from "react";
import "../css/Content.css";
import Image from "../asset/image.png";

function Content() {
  return (
    <div className="main_desc">
      <div className="content_desc">
        <h1 className="content_title">Monetization on Your Terms</h1>
        <p className="para">
          Explore innovative ways to earn from your content. Everything you
          build here is safe and secure. Earn your consistent income.Get
          detailed campaign briefs from brands—no more back-and-forth emails or
          lengthy calls.Get detailed campaign briefs from brands—no more
          back-and-forth emails calls.
        </p>
        <p className="para">
          Explore innovative ways to earn from your content. Everything you
          build here is safe and secure. Earn your consistent income.Get
          detailed campaign briefs from brands—no more back-and-forth emails or
          lengthy calls.Get detailed campaign briefs from brands—no more
          back-and-forth emails calls.
        </p>
      </div>
      <div className="content_img">
        <img src={Image} className="image" alt="Advertisement" />
      </div>
    </div>
  );
}

export default Content;
