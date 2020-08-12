import React from "react";
import styled from "styled-components";
import COLORS from "../constants";
import ProfileHandleInfo from "./ProfileHandleInfo";
import ProfileInfoGrid from "./ProfileInfoGrid";
import { ProfileContext } from "../ProfileContext";
import ProfileFooter from "./ProfileFooter";

const ProfileInfo = () => {
  const { profileData } = React.useContext(ProfileContext);
  const { profile } = profileData;
  return (
    <BigWrapper>
      <Banner src={profile.bannerSrc} />
      <Wrapper>
        <InfoWrapper>
          <TopWrapper>
            <Avatar src={profile.avatarSrc} />
            <StyledButton>Follow</StyledButton>
          </TopWrapper>
          <ProfileHandleInfo />
          <Bio>{profile.bio}</Bio>
          <ProfileInfoGrid />
        </InfoWrapper>
        <ProfileFooter />
      </Wrapper>
    </BigWrapper>
  );
};

export default ProfileInfo;

const BigWrapper = styled.div`
  margin-bottom: 85px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: -85px 0;
`;

const Banner = styled.img`
  position: relative;
  z-index: -1;
  height: 250px;
  object-fit: cover;
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 1;
  margin: 15px 0;
`;

const Avatar = styled.img`
  width: 130px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white;
`;

const StyledButton = styled.button`
  color: white;
  background-color: ${COLORS.primary};
  border: none;
  padding: 10px 0;
  border-radius: 20px;
  margin: 15px 0;
  font-weight: 600;
  width: 100px;
`;

const Bio = styled.p`
  margin: 10px 0;
  line-height: 130%;
`;
