import React from "react";
import "../UserProfile.css";

function ProfileHeader({ user }) {
  return (
    <div className="profile-header border-bottom">
      <div className="header">
        <div className="profile-banner"></div>
        <img
          src={
            user.avatar.includes("http")
              ? user.avatar
              : `http://localhost:3000/img/${user.avatar}`
          }
          alt="user-profile-image"
          className="profile-avatar"
        />
      </div>
      <div className="my-2">
        <span className="lh-1">
          <h3 className="bold">
            {user.firstname} {user.lastname}
          </h3>
          <p className="grey">@{user.username}</p>
        </span>
        <p>{user.description}</p>
        <small className="grey">19 Following 123 Followers</small>
      </div>
    </div>
  );
}

export default ProfileHeader;
