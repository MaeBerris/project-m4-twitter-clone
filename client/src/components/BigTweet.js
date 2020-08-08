import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import COLORS from "../constants";
import ActionBar from "./ActionBar";

const BigTweet = ({ tweetData }) => {
  const { author } = tweetData;
  const date = format(new Date(tweetData.timestamp), "h':'mm a'-' LLL d y");
  const [isLiked, setIsLiked] = React.useState(tweetData.isLiked);
  const [numberOfLikes, setNumberOfLikes] = React.useState(tweetData.numLikes);
  const [numberOfRetweets] = React.useState(tweetData.numRetweets);
  return (
    <Wrapper>
      <Header>
        <Avatar src={author.avatarSrc} />
        <HandleWrapper>
          <DisplayName to={`/${author.handle}`}>
            {author.displayName}
          </DisplayName>
          <Handle>@{author.handle}</Handle>
        </HandleWrapper>
      </Header>
      <Status>{tweetData.status}</Status>
      {tweetData.media.length > 0 && (
        <StyledImg src={tweetData.media[0].url}></StyledImg>
      )}
      <Footer>{date} - Critter Web App</Footer>
      <ActionBar
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        numberOfLikes={numberOfLikes}
        setNumberOfLikes={setNumberOfLikes}
        tweetId={tweetData.id}
        numberOfRetweet={numberOfRetweets}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-right: 1px solid ${COLORS.divider};
`;
const Header = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const HandleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DisplayName = styled(Link)`
  font-size: 1.2em;
  color: black;
  font-weight: 700;
  margin-bottom: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const Handle = styled.span`
  color: grey;
`;

const Status = styled.p`
  font-size: 1.4em;
  font-weight: 300;
  line-height: 130%;
  margin: 15px 0;
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 8%;
  object-fit: cover;
`;

const Footer = styled.footer`
  color: grey;
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid ${COLORS.divider};
`;
export default BigTweet;
