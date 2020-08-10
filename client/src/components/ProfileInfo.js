import React from "react";
import styled from "styled-components";
import COLORS from "../constants";

const ProfileInfo = ({ profileData }) => {
  const { profile } = profileData;
  return (
    <Wrapper>
      <Banner src={profile.bannerSrc} />
      <InfoWrapper>
        <TopWrapper>
          <Avatar src={profile.avatarSrc} />
          <StyledButton>Follow</StyledButton>
        </TopWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ProfileInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.img`
  position: relative;
  z-index: -1;
  height: 250px;
  object-fit: cover;
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
  margin: -65px 0;
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
