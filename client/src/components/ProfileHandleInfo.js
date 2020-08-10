import React from "react";
import styled from "styled-components";
import { ProfileContext } from "../ProfileContext";

const ProfileHandleInfo = () => {
  const { profileData } = React.useContext(ProfileContext);
  const { profile } = profileData;

  return (
    <div>
      <DisplayName>{profile.displayName}</DisplayName>
      <Handle>@{profile.handle}</Handle>
      {profile.isFollowingYou && <FollowStatus>Follows You</FollowStatus>}
    </div>
  );
};

export default ProfileHandleInfo;

const DisplayName = styled.h1`
  font-size: 1.2em;
  color: black;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Handle = styled.span`
  color: grey;
`;

const FollowStatus = styled.span`
  background-color: lightgrey;
  color: grey;
  border-radius: 3px;
`;
