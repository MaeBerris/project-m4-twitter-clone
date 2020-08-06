import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const SmallTweet = ({ tweetData }) => {
  const { author } = tweetData;
  const date = format(new Date(tweetData.timestamp), "LLL do");
  return (
    <Wrapper>
      <Avatar src={author.avatarSrc} />
      <TweetBody>
        <header>
          <DisplayName>{author.displayName}</DisplayName>
          <Handle>@{author.handle} - </Handle>
          <DateStamp>{date}</DateStamp>
        </header>
        <Status>{tweetData.status}</Status>
        {tweetData.media.length > 0 ? (
          <StyledImg src={tweetData.media[0].url} />
        ) : null}
      </TweetBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 50px 1fr;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  max-width: 60%;
`;

const DisplayName = styled.span`
  font-weight: 700;
  font-size: 1.1em;
`;

const Handle = styled.span`
  color: lightgrey;
  font-size: 0.9em;
  margin-left: 5px;
`;

const DateStamp = styled.span`
  color: lightgrey;
  font-size: 0.9em;
`;

const Status = styled.div`
  padding: 10px 0;
  line-height: 130%;
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 8%;
  max-height: 400px;
  object-fit: cover;
`;
export default SmallTweet;
