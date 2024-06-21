import React from "react";
import "../ProfileUser.css";

function ProfileHeader({ user }) {
  return (
    <div className="profile-header border-bottom">
      <div className="profile-banner"></div>
      <img
        src={user.photo}
        alt="user-profile-image"
        className="profile-avatar"
      />
      <div className="d-flex justify-content-between mt-2">
        <span className="lh-1">
          <h2>
            {user.firstname} {user.lastname}
          </h2>
          <p className="grey">@{user.username}</p>
          <p>{user.description}</p>
        </span>
        <small className="grey mt-2">19 Following 123 Followers</small>
      </div>
    </div>
  );
}

export default ProfileHeader;
