import React, { useEffect, useContext, useState } from "react";
import Page from "./Page";
import ProfilePost from "./ProfilePost";
import { useParams } from "react-router-dom";
import Axios from "axios";
import StateContext from "../StateContext";

const Profile = () => {
  const { username } = useParams();
  const appState = useContext(StateContext);
  const [profileData, setProfileData] = useState({
    profileUsername: "....",
    profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
    isFollowing: false,
    counts: { postCount: "", followerCount: "", followingCount: "" }
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.post(`/profile/${username}`, {
          token: appState.user.token
        });
        setProfileData(response.data);
      } catch (err) {
        console.log("there was an error");
      }
    }
    fetchData();
  }, []);
  return (
    <Page title="Profiel Screen">
      <h2>
        <img className="avatar-small" src={profileData.profileAvatar} />{" "}
        {profileData.profileUsername}
        <button className="btn btn-primary btn-sm ml-2">
          Follow <i className="fas fa-user-plus"></i>
        </button>
      </h2>

      <div className="profile-nav nav nav-tabs pt-2 mb-4">
        <a href="#" className="active nav-item nav-link">
          Post: {profileData.counts.postCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Follower:{profileData.counts.followerCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Following: {profileData.counts.followingCount}
        </a>
      </div>
      <ProfilePost />
    </Page>
  );
};

export default Profile;
