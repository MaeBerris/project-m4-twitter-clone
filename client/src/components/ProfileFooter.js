import React from "react";
import COLORS from "../constants";
import styled from "styled-components";

const ProfileFooter = () => {
  return (
    <Footer>
      <Page>
        <StyledInput
          type="radio"
          value="tweets"
          name="radio"
          id="radio1"
          defaultChecked
        />
        <StyledLabel htmlFor="radio1">Tweets</StyledLabel>
      </Page>
      <Page>
        <StyledInput type="radio" value="media" name="radio" id="radio2" />
        <StyledLabel htmlFor="radio2">Media</StyledLabel>
      </Page>
      <Page>
        <StyledInput type="radio" value="likes" name="radio" id="radio3" />
        <StyledLabel htmlFor="radio3">Likes</StyledLabel>
      </Page>
    </Footer>
  );
};

export default ProfileFooter;

const Footer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: 650;
  list-style: none;
`;

const Page = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  display: none;
  &:checked + label {
    color: ${COLORS.primary};
    border-bottom: 1px solid ${COLORS.primary};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid ${COLORS.divider};
  height: 40px;
`;
