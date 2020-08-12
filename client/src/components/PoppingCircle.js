import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ color }) => {
  return <Wrapper style={{ background: color }}></Wrapper>;
};

const opacity = keyframes`
from{
  opacity: 1;
}
to {
  opacity: 0;
}
`;

const scale = keyframes`
  from{
    transform:scale(0);
  } to {
    transform:scale(1.1);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 25px;
  height: 25px;
  z-index: 0;
  border-radius: 50%;
  animation: ${opacity} 800ms forwards, ${scale} 400ms ease-in-out;
`;

export default PoppingCircle;
