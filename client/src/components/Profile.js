import React from "react";
import Styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import { ProfileContext } from "../ProfileContext";

const Profile = () => {
  const { status } = React.useContext(ProfileContext);
  return <div>{status === "idle" ? <ProfileInfo /> : <div>loading</div>}</div>;
};

export default Profile;
