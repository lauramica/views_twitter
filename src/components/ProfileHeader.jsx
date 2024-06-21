import React from "react";
import "../ProfileUser.css";

function ProfileHeader({ user }) {
  return (
    <div className="profile-header border-bottom">
      <div className="bg-profile">
        <img
          src="../images/bg-profile-img.jpg"
          alt="profile-bg-img"
          className="img-fluid"
        />
      </div>
      <img
        src={user.photo}
        alt="user-profile-image"
        className="profile-avatar img-fluid"
      />
      <div>
        <div className="d-flex justify-content-between">
          <span className="lh-1">
            <h3>
              {user.firstname} {user.lastname}
            </h3>
            <p className="grey">@{user.username}</p>
          </span>
          <small className="text-nowrap grey">19 Following 123 Followers</small>
        </div>
        <p>{user.description}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;
