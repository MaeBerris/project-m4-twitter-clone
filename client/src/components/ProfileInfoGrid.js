import React from "react";
import styled from "styled-components";
import { ProfileContext } from "../ProfileContext";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { format } from "date-fns";

const ProfileInfoGrid = () => {
  const { profileData } = React.useContext(ProfileContext);
  const { profile } = profileData;
  const date = format(new Date(profile.joined), "LLLL y");

  return (
    <Wrapper>
      <div>
        <FiMapPin /> {profile.location}
      </div>
      <div>
        <FiCalendar /> {`Joined ${date}`}
      </div>
      <div>
        <Number>{profile.numFollowing}</Number> Following
      </div>
      <div>
        <Number>{profile.numFollowers}</Number> Followers
      </div>
    </Wrapper>
  );
};
export default ProfileInfoGrid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  color: grey;
  gap: 15px 20px;
  margin: 10px 0;
`;

const Number = styled.span`
  color: black;
`;
