import React from "react";
import "../ProfileUser.css";

function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="bg-profile">
        <img
          src="../images/bg-profile-img.jpg"
          alt="profile-bg-img"
          className="img-fluid"
        />
      </div>
      <img
        src="../images/gatito.jpg"
        alt="user-profile-image"
        className="profile-avatar img-fluid"
      />
      <div>
        <div className="d-flex justify-content-between">
          <span className="lh-1">
            <h3>Name Lastname</h3>
            <p className="grey">@username</p>
          </span>
          <small className="text-nowrap grey">19 Following 123 Followers</small>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam error
          quo quis modi quidem asperiores deserunt, perspiciatis aperiam ex?
        </p>
      </div>
    </div>
  );
}

export default ProfileHeader;
