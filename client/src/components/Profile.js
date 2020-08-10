import React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import { ProfileContext } from "../ProfileContext";
import HomeFeed from "./HomeFeed";
import Spinner from "./Spinner";

const Profile = () => {
  const { status, profileId } = React.useContext(ProfileContext);
  return (
    <div>
      {status === "idle" ? (
        <Wrapper>
          <ProfileInfo />
          <HomeFeed url={`/api/${profileId}/feed`} />
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Profile;
