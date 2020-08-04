import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import COLORS from "../constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <SecondWrapper>
        <StyledLogo width="60px" />
        <LinkWrapper exact to="/">
          <FiHome width="60px" />
          <StyledLinkText>Home</StyledLinkText>
        </LinkWrapper>
        <LinkWrapper to="/profile">
          <FiUser width="60px" />
          <StyledLinkText>Profile</StyledLinkText>
        </LinkWrapper>
        <LinkWrapper to="/notifications">
          <FiBell width="60px" />
          <StyledLinkText>Notifications</StyledLinkText>
        </LinkWrapper>
        <LinkWrapper to="/bookmarks">
          <FiBookmark width="60px" />
          <StyledLinkText>Bookmarks</StyledLinkText>
        </LinkWrapper>
        <StyledButton>Meow</StyledButton>
      </SecondWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  position: sticky;
  top: 0;
  border-right: 1px solid ${COLORS.divider};
  padding: 15px;
`;

const StyledLogo = styled(Logo)`
  width: 40px;
  margin-top: -20px;
  margin-left: -5px;
`;

const SecondWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px 10px;
`;

const LinkWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 15px 0;
  text-decoration: none;
  padding: 10px;
  color: black;

  &.active {
    color: ${COLORS.primary};
  }

  &:hover {
    background-color: ${COLORS.primaryBrighter};
    border-radius: 20px;
  }
`;
const StyledLinkText = styled.span`
  margin-left: 20px;
  font-weight: 600;
`;

const StyledButton = styled.button`
  color: white;
  background-color: ${COLORS.primary};
  border: none;
  padding: 10px 0;
  border-radius: 20px;
  margin: 15px 0;
  font-weight: 600;
  width: 100%;
`;
export default Sidebar;
