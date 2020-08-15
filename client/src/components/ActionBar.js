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
      .then((data) => data)
      .catch((err) => console.log(err));
  };

  const stopProp = (ev) => {
    ev.stopPropagation();
  };
  return (
    <Wrapper>
      <ButtonWrapper>
        <ActionButton onClick={stopProp} color="blue">
          <FiMessageCircle />
        </ActionButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <ActionButton onClick={stopProp} color="green">
          <FiRepeat />
        </ActionButton>
        {numberOfRetweets !== 0 ? <Number>{numberOfRetweets}</Number> : null}
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
        <ActionButton onClick={stopProp} color="teal">
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
  margin-top: 2px;
`;

export default ActionBar;
