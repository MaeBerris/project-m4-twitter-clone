import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import COLORS from "../constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <SecondWrapper>
        <StyledLogo width="60px" />
        <LinkWrapper>
          <FiHome width="60px" />
          <StyledLink to="/">Home</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <FiUser width="60px" />
          <StyledLink to="/profile">Profile</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <FiBell width="60px" />
          <StyledLink to="/notifications">Notifications</StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <FiBookmark width="60px" />
          <StyledLink to="/bookmarks">Bookmarks</StyledLink>
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
  flex-direction: column;
  padding: 10px 10px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;
const StyledLink = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: black;
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
`;
export default Sidebar;
