import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { FiRepeat } from "react-icons/fi";
import COLORS from "../constants";
import ActionBar from "./ActionBar";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SmallTweet = ({ tweetData }) => {
  const { author } = tweetData;
  const date = format(new Date(tweetData.timestamp), "LLL do");
  const [isLiked, setIsLiked] = React.useState(tweetData.isLiked);
  const [numberOfLikes, setNumberOfLikes] = React.useState(tweetData.numLikes);
  const [numberOfRetweets, setNumberOfRetweets] = React.useState(
    tweetData.numRetweets
  );
  let history = useHistory();

  function ClickLink() {
    history.push(`/tweet/${tweetData.id}`);
  }
  return (
    <TweetWrapper
      tabIndex="0"
      onClick={ClickLink}
      onKeyDown={(ev) => {
        if (ev.key === "Space" || ev.key === "Enter") {
          ClickLink();
        }
      }}
    >
      {tweetData.retweetFrom && (
        <Retweet>
          <RetweetIcon />
          {tweetData.retweetFrom.handle} Retweeted
        </Retweet>
      )}
      <Wrapper>
        <Avatar src={author.avatarSrc} />
        <TweetBody>
          <Header>
            <DisplayName
              to={`/${author.handle}`}
              onClick={(ev) => {
                ev.stopPropagation();
              }}
              onKeyDown={(ev) => {
                ev.stopPropagation();
              }}
            >
              {author.displayName}
            </DisplayName>
            <Handle>@{author.handle} - </Handle>
            <span>{date}</span>
          </Header>
          <Status>{tweetData.status}</Status>
          {tweetData.media.length > 0
            ? tweetData.media.map((item, index) => {
                return <StyledImg key={index} src={item.url} />;
              })
            : null}
          <ActionBar
            isLiked={isLiked}
            setIsLiked={setIsLiked}
            numberOfLikes={numberOfLikes}
            setNumberOfLikes={setNumberOfLikes}
            tweetId={tweetData.id}
            numberOfRetweet={numberOfRetweets}
          />
        </TweetBody>
      </Wrapper>
    </TweetWrapper>
  );
};

const TweetWrapper = styled.div`
  border-bottom: 1px solid ${COLORS.divider};
  border-right: 1px solid ${COLORS.divider};
  padding: 5px;
`;

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
`;

const Header = styled.header`
  color: grey;
  font-size: 0.9em;
`;

const DisplayName = styled(Link)`
  font-weight: 700;
  font-size: 1.1em;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const Retweet = styled.div`
  margin-bottom: 5px;
  margin-left: 45px;
  color: grey;
  font-size: 0.9em;
`;

const RetweetIcon = styled(FiRepeat)`
  margin-bottom: -2px;
  margin-right: 5px;
`;
const Handle = styled.span`
  margin-left: 5px;
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
