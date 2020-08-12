import React from "react";
import { FiRepeat, FiHeart, FiMessageCircle, FiShare } from "react-icons/fi";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import PoppingCircle from "./PoppingCircle";
const ActionBar = ({
  isLiked,
  setIsLiked,
  numberOfLikes,
  setNumberOfLikes,
  tweetId,
  numberOfRetweets,
}) => {
  const LikeFunction = (ev) => {
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
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        <ActionButton color="blue">
          <FiMessageCircle />
        </ActionButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <ActionButton color="green">
          <FiRepeat />
          {numberOfRetweets !== 0 ? <Number>{numberOfRetweets}</Number> : null}
        </ActionButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <ActionButton onClick={LikeFunction} color="red">
          {isLiked && <PoppingCircle color="purple"></PoppingCircle>}
          <FiHeart
            fill={isLiked ? "red" : "white"}
            style={{
              transition: "500ms",
              position: "relative",
              zIndex: "1",
            }}
          />
        </ActionButton>
        {numberOfLikes !== 0 ? <Number>{numberOfLikes}</Number> : null}
      </ButtonWrapper>
      <ButtonWrapper>
        <ActionButton color="teal">
          <FiShare />
        </ActionButton>
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

const Number = styled.span`
  position: absolute;
`;

export default ActionBar;
