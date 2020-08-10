import React from "react";
import styled from "styled-components";
import { u1F4A3 as Bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";
import { Icon } from "react-icons-kit";

const IconBomb = () => <Icon icon={Bomb} size={55} />;

const ErrorScreen = () => {
  return (
    <Wrapper>
      <StyledIcon />
      <StyledStatus>An unknown error has occured.</StyledStatus>
      <StyledMessage>
        Please try refreshing the page or contact support if the problem
        persists
      </StyledMessage>
    </Wrapper>
  );
};
export default ErrorScreen;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledIcon = styled(IconBomb)`
  margin: 60px 0;
`;

const StyledStatus = styled.h1`
  font-size: 1.3em;
  font-weight: 800;
  margin: 15px 0;
`;

const StyledMessage = styled.p`
  line-height: 130%;
`;
