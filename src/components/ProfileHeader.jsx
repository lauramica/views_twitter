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
          <h3 className="bold text-nowrap">
            {user.firstname} {user.lastname}
          </h3>
          <p className="grey">@{user.username}</p>
        </span>
        <small className="grey mt-2 text-nowrap">
          19 Following 123 Followers
        </small>
      </div>
      <p>{user.description}</p>
    </div>
  );
}

export default ProfileHeader;
