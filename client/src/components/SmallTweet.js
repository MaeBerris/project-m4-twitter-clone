import React from "react";
import styled from "styled-components";
import moment from "moment";

const SmallTweet = ({ tweetData }) => {
  const { author } = tweetData;
  return (
    <Wrapper>
      <Avatar src={author.avatarSrc} />
      <TweetBody>
        <Header></Header>
      </TweetBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
`;

const Avatar = styled.img`
  width: 55px;
  border-radius: 50%;
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SmallTweet;
