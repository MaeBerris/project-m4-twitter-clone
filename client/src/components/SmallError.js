import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { u1F4A3 as Bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";

const IconBomb = () => <Icon icon={Bomb} size={22} />;

const SmallError = ({ message }) => {
  return (
    <Wrapper>
      <IconBomb />
      <BoldError>Error:</BoldError>
      <Message>{message}</Message>
    </Wrapper>
  );
};

export default SmallError;

const Wrapper = styled.div`
  display: flex;
  color: firebrick;
`;

const BoldError = styled.span`
  font-weight: 700;
`;

const Message = styled.span``;
