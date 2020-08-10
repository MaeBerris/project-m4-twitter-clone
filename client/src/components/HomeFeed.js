import React from "react";
import styled from "styled-components";
import SmallTweet from "./SmallTweet";
import { HomeFeedContext } from "../HomeFeedContext";
import Spinner from "./Spinner";
import useSetFeed from "../useSetFeed.hook";
import ErrorScreen from "./ErrorScreen";

const HomeFeed = ({ url }) => {
  const {
    feed,
    setFeed,
    setFeedStatus,
    feedStatus,
    error,
    setFeedError,
  } = React.useContext(HomeFeedContext);

  useSetFeed({
    url: url,
    dataSettingFunction: setFeed,
    statusSettingFunction: setFeedStatus,
    errorSettingFunction: setFeedError,
  });

  return (
    <div>
      {error === false ? (
        <Wrapper>
          {feedStatus === "idle" ? (
            <div>
              {feed.tweetIds.map((tweetId, index) => {
                const tweetData = feed.tweetsById[tweetId];
                return (
                  <SmallTweet key={tweetId + index} tweetData={tweetData} />
                );
              })}
            </div>
          ) : (
            <Spinner />
          )}
        </Wrapper>
      ) : (
        <ErrorScreen errorType="feed loading" />
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default HomeFeed;
