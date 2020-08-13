import React from "react";
import styled from "styled-components";
import COLORS from "../constants";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BigTweetHeader = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <BackButton
        onClick={() => {
          history.goBack();
        }}
      >
        <Icon size={25} />
      </BackButton>
      <Title>Back</Title>
    </Wrapper>
  );
};

export default BigTweetHeader;

const Wrapper = styled.header`
  padding: 10px 15px;
  border-bottom: 1px solid ${COLORS.divider};
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  border: none;
  color: black;
  cursor: pointer;
  background: none;
  margin-right: 10px;
`;

const Icon = styled(FiArrowLeft)`
  margin-top: 5px;
`;

const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 800;
`;
