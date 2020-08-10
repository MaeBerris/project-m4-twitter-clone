import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

const Spinner = () => {
  return (
    <Wrapper>
      <SpinWheel />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = keyframes`
from{
  transform: rotate(0deg)
}to{
  transform: rotate(360deg)
}`;

const SpinWheel = styled(FiLoader)`
  animation: ${Spin} 2000ms linear infinite;
  width: 25px;
  height: 25px;
`;

export default Spinner;
