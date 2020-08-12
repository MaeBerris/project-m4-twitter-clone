import React from "react";
import styled from "styled-components";

const ActionButton = ({ children, onClick, color }) => {
  return (
    <StyledButton
      onKeyDown={(ev) => {
        ev.stopPropagation();
      }}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default ActionButton;

const StyledButton = styled.button`
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
  width: 25px;
  height: 25px;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  &:focus {
    outline: none;
  }

  &:after {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: ${(props) => props.color};
  }

  &:focus:after,
  &:hover:after {
    opacity: 0.12;
  }
`;
