import React from "react";
import styled from "styled-components";
import COLORS from "../constants";

const HomeHeader = () => {
  return (
    <Wrapper>
      <Title>Home</Title>
    </Wrapper>
  );
};

export default HomeHeader;
const Wrapper = styled.header`
  padding: 10px 20px;
  border-bottom: 1px solid ${COLORS.divider};
`;

const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 800;
`;
