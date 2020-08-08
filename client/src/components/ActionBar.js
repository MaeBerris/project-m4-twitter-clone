import React from "react";
import { FiRepeat, FiHeart, FiMessageCircle, FiShare } from "react-icons/fi";
import styled from "styled-components";

const ActionBar = ({
  isLiked,
  setIsLiked,
  numberOfLikes,
  setNumberOfLikes,
  tweetId,
  numberOfRetweets,
}) => {
  return (
    <Wrapper>
      <ButtonWrapper>
        <StyledButton>
          <FiMessageCircle />
        </StyledButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledButton>
          <FiRepeat />
          {numberOfRetweets !== 0 ? <span>{numberOfRetweets}</span> : null}
        </StyledButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledButton
          onClick={(ev) => {
            ev.stopPropagation();
            const valueToSet = !isLiked;
            console.log(valueToSet);
            if (isLiked) {
              setNumberOfLikes(numberOfLikes - 1);
              setIsLiked(!isLiked);
            } else {
              setNumberOfLikes(numberOfLikes + 1);
              setIsLiked(!isLiked);
            }
            fetch(`/api/tweet/${tweetId}/like`, {
              method: "PUT",
              body: JSON.stringify({
                like: valueToSet,
              }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
          }}
          onKeyDown={(ev) => {
            ev.stopPropagation();
          }}
        >
          <FiHeart fill={isLiked ? "red" : "white"} />
        </StyledButton>
        {numberOfLikes !== 0 ? <span>{numberOfLikes}</span> : null}
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledButton>
          <FiShare />
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  max-width: 90%;
`;
const ButtonWrapper = styled.div``;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default ActionBar;
