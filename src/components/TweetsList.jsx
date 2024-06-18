import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Home.css";

function TweetsList() {
  return (
    <div className="tweets-container">
      <div className="tweet-box d-flex">
        <div className="img-box">
          <img
            src="../images/gatito.jpg"
            alt="gatito"
            className="profile-picture m-2"
          />
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex">
            <p className="bold me-2">Gatito</p>
            <p className="grey">@gatito · 6hs</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            dolor.
          </p>
          <p className="m-0">
            <i className="bi bi-heart"></i>
            <i className="bi bi-heart-fill"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TweetsList;
